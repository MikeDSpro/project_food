import Router from 'koa-router';
import jwt from 'jsonwebtoken';
import User from './models/user';
import Hommy from './models/hommy';
import Day from './models/day';
import jwtsecret from './config';
import bcrypt from 'bcrypt';


const router = new Router();

router
  .get('/health', (ctx, next) => {
      ctx.body = 'Server is running'
  })
   .get('/hommy/:id', async (ctx, next) => {
    try{
    ctx.body = await Hommy.findById(ctx.params.id);
    return next();
    }catch(e){
      res.body = "Not Found";
      return next();
    }
  })
  .get('/hommy/', async (ctx, next) => {
    try{
      ctx.body = await Hommy.findAll();
      return next();
    }catch(e){
      res.body = "Not Found";
      return next();
    }
  })
  .post('/hommy/', async (ctx, next) => {
    try{
      const hommy = await Hommy.create(ctx.request.body);
      const email = hommy.email;
      const lastCreated = await Hommy.findOne({where: {email:email}});
      ctx.body = lastCreated;
       return next();
    }catch (e){
      ctx.body = "Can't create new Hommmy";
      return next();
    }
  })
  .put('/hommy/:id', async (ctx, next) => {
    try{
     ctx.body = await Hommy.update(ctx.request.body, {where: {id: `${ctx.request.body.id}`}});
     return next();
    }catch(e){
      ctx.body = "Not Found";
      return next();
    }
  })
  .del('/hommy/:id', async (ctx, next) => {
    try{
      console.log(ctx.body)
      ctx.body = await Hommy.destroy({where: {id: ctx.params.id}});
      return next();
    }catch(e){
      ctx.body = "Not Found";
      return next();
    }
  })
  .post('/auth/login', async(ctx, next) => {
    try{
      const admin = await User.findOne({where: {firstName: ctx.request.body.firstName}});
      if(!admin) throw new Error('No such user');
      const isPasswordValid = await bcrypt.compare(ctx.request.body.password, admin.hash);
      if(!isPasswordValid) throw new Error("Password is invalid");
      const jsonToken = {
        token: jwt.sign({
          user: admin}, jwtsecret)
      };
      ctx.body = jsonToken.token;
      console.log(typeof (jsonToken.token))
      return next();
    }catch(e){
      console.log(e);
      ctx.status = 400;
      ctx.body = {error: e.message};        //error: e.message
      return next();
    }
  })
  .post('/actions/newday/closeday', async (ctx, next) => {
    try{
      const currentDay = await Day.findOne({where: {createdAt: ctx.request.body.date}});
      if(!currentDay){
        ctx.body = await Day.create(ctx.request.body);
      }
      ctx.body = await Day.update(ctx.request.body, {where: {createdAt: `${ctx.request.body.date}`}});

      return next();
    }catch (e){
      ctx.body = "Can't close the day";
      return next();
    }
  })
  .all('/user/:id', function (ctx, next) {
    
  });
  
export default router;