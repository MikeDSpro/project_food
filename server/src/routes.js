import Router from 'koa-router';
import moment from 'moment';
import Hommy from './models/hommy';
import Day from './models/day';
import HommieBalance from './models/hommieBalance';
import { login } from './controllers/controller';


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
      ctx.body = "Not Found";
      return next();
    }
  })
  .get('/hommy/', async (ctx, next) => {
    try{
      const hommies = await Hommy.findAll();
      ctx.body = hommies;
      return next();
    }catch(e){
      ctx.body = "Not Found";
      return next();
    }
  })
  .post('/hommy/amount', async(ctx, next) => {
    try{
      const currentDate = moment().format("YYYY-MM-DD");
      const {date} = ctx.request.body;
      const hommies = await Hommy.findAll();
      await Promise.all(hommies.map(async (item) => {
        const balance = await HommieBalance.findOne({where:{hommyId:item.id}});
        if(!balance){
          await HommieBalance.create({hommyId: item.id, amount: 0, date, debt: 0})
        }else {
          return;
        }
      }));
      ctx.body = await HommieBalance.findAll();
      return next();
    }catch (e){
      ctx.body = "Can't get amounts";
      return next();
    }
  })
  .post('/hommy/', async (ctx, next) => {
    try{
      const hommy = await Hommy.create(ctx.request.body);
      const {email} = hommy;
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
     await Hommy.update(ctx.request.body, {where: {id: `${ctx.request.body.id}`}});
     const lastUpdated = await Hommy.findOne({where: {id:`${ctx.request.body.id}`}});

     ctx.body = lastUpdated;
     return next();
    }catch(e){
      ctx.body = "Not Found";
      return next();
    }
  })
  .del('/hommy/:id', async (ctx, next) => {
    try{
      ctx.body = await Hommy.destroy({where: {id: ctx.params.id}});
      return next();
    }catch(e){
      ctx.body = "Not Found";
      return next();
    }
  })
  .post('/auth/login', login)

  .post('/actions/newday/closeday', async (ctx, next) => {
    try{
      const reqBody = ctx.request.body;
      const {hommies, date} = reqBody;
      const lastDay = await Day.findOne({where: {date:reqBody.date}});

      hommies.forEach(async (hom) => {
       const lastEntry = await HommieBalance.findOne({where: {userId: hom.id}}); // todo: check which id to match
          if(lastEntry){
          await lastEntry.update({amount: hom.total, userId:hom.id});
          } else {
            await HommieBalance.create({userId: hom.id, amount: hom.total, date});
          }
      });

       if(lastDay){
        ctx.body = await lastDay.update(reqBody);
        } else {
         ctx.body = await Day.create(reqBody);}

    }catch (e){
      ctx.body = "Can't close the day";
      return next();
    }
  })
  .post('/actions/newday/closeday/save', async(ctx, next) => {
    try{
      return next()
    }catch (e){
      return next();
    }
  })
  .all('/user/:id', async (ctx, next) => {
    
  });
  
export default router;