import Router from 'koa-router';
import jwt from 'jsonwebtoken';
import User from './models/user';
import jwtsecret from './config';
import bcrypt from 'bcrypt';


const router = new Router();

router
  .get('/health', (ctx, next) => {
      ctx.body = 'Server is running'
  })
   .get('/user/:id', async (ctx, next) => {
    try{
    ctx.body = await User.findById(ctx.params.id);
    return next();
    }catch(e){
      res.body = "Not Found";
      return next();
    }
  })
  .get('/user/', async (ctx, next) => {
    try{
      ctx.body = await User.findAll();
      return next();
    }catch(e){
      res.body = "Not Found";
      return next();
    }
  })
  .post('/user/', async (ctx, next) => {
    try{

      ctx.body = await User.create(ctx.request.body);
      return next();
    }catch (e){
      ctx.body = "Not Found";
      return next();
    }
  })
  .put('/user/:id', async (ctx, next) => {
    try{
     ctx.body = await User.update(ctx.request.body, {where: {id: `${ctx.request.body.id}`}});
     return next();
    }catch(e){
      ctx.body = "Not Found";
      return next();
    }
  })
  .del('/user/:id', async (ctx, next) => {
    try{
      ctx.body = await User.destroy({where: {id: ctx.params.id}});
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
      ctx.body = {
        token: jwt.sign({
          user: admin}, jwtsecret)
      };
      return next();
    }catch(e){
      console.log(e);
      ctx.status = 400;
      ctx.body = {error: e.message};        //error: e.message
      return next();
    }
  })
  .post('/auth/', async(ctx, next) => {
    try{
      
    }catch(e){
      
    }
  })
  .all('/user/:id', function (ctx, next) {
    
  });
  
export default router;