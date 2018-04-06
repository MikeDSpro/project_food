import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import moment from "moment/moment";
import Sequelize from "sequelize";
import jwtsecret from "../config";
import User from "../models/user";
import Day from "../models/day";
import models from '../models';


const {Hommy, HommieBalance} = models;

export async function getOne(ctx) {
  try{
    ctx.body = await Hommy.findById(ctx.params.id);
  }catch(e){
    ctx.body = "Not Found";
  }
}

export async function getAll(ctx) {
  try{
    const hommies = await Hommy.findAll();
    ctx.body = hommies;
  }catch(e){
    ctx.body = "Not Found";
  }
}

export async function login(ctx) {
  try {
    const admin = await User.findOne({where: {firstName: ctx.request.body.firstName}});
    if (!admin) throw new Error('No such user');
    const isPasswordValid = await bcrypt.compare(ctx.request.body.password, admin.hash);
    if (!isPasswordValid) throw new Error("Password is invalid");
    const jsonToken = {
      token: jwt.sign({
        user: admin
      }, jwtsecret)
    };
    ctx.body = jsonToken.token;
  } catch (e) {
    ctx.status = 400;
    ctx.body = {error: e.message};
  }
}

export async function createOne(ctx) {
  try{
    const { body } = ctx.request
    const {email} = await Hommy.create(body);
    const lastCreated = await Hommy.findOne({where: {email}});
    ctx.body = lastCreated;
  }catch (e){
    ctx.body = "Can't create new Hommmy";
  }
}

export async function updateOne(ctx) {
  try{
    const {id} = ctx.request.body
    if (!id) return
    await Hommy.update(ctx.request.body, {where: {id}});
    const lastUpdated = await Hommy.findOne({where: {id}});
    ctx.body = lastUpdated;
  }catch(e){
    ctx.body = "Not Found";
  }
}

export async function deleteOne(ctx) {
  try{
    const { id } = ctx.params;
    ctx.body = await Hommy.destroy({where: {id}});
  }catch(e){
    ctx.body = "Not Found";
  }
}
export async function createAmount(ctx) {
  try{
    const currentDate = moment().format("YYYY-MM-DD");
    const {date} = ctx.request.body;
    const hommies = await Hommy.findAll();
    await Promise.all(hommies.map(async (item) => {
      const balance = await HommieBalance.findOne({where:{ hommyId:item.id, date:currentDate }});
      if(!balance){
        await HommieBalance.create({hommyId: item.id, amount: 0, date, debt: 0})
      }
    }));

    const modifiedHommies = await Hommy.findAll({
      include: [{
        model: HommieBalance,
        where: { hommyId: Sequelize.col('hommy.id'), date: currentDate }
      }]
    });
    ctx.body = modifiedHommies;

  }catch (e){
    ctx.body = "Can't get amounts";
  }
}
export async function closeDay(ctx, next) { // eslint-disable-line
  try{
    const reqBody = ctx.request.body;
    const {hommies, date} = reqBody;
    const lastDay = await Day.findOne({where: {date:reqBody.date}});
      hommies.forEach(async (hom) => {
      const lastEntry = await HommieBalance.findOne({where: {userId: hom.id}}); // todo: check which id to match
      if(lastEntry){
        await lastEntry.update({amount: hom.total, userId:hom.id});
      }else {
        await HommieBalance.create({userId: hom.id, amount: hom.total, date});
      }
    });
    if(lastDay){
      ctx.body = await lastDay.update(reqBody);
    } else {
      ctx.body = await Day.create(reqBody);
    }
  }catch (e){
    ctx.body = "Can't close the day";
    return next();
  }
}