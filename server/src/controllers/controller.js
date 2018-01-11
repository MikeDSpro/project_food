import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import jwtsecret from "../config";
import User from "../models/user";

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
    ctx.body = {error: e.message};        // error: e.message
  }
};