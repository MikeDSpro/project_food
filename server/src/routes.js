import Router from 'koa-router';
import moment from 'moment';
import Sequelize from 'sequelize';
import Day from './models/day';
import models from './models';
import { login, closeDay, getOne, getAll, health, createAmount, createOne, deleteOne, updateOne } from './controllers/controller';
import sequilize from './db';

const {Hommy, HommieBalance} = models;

const router = new Router();

const attributes = ['id', 'hommyId', 'date', 'debt', 'amount'];

router
  .get('/health', health)
  .get('/hommy/:id', getOne)
  .get('/hommy/', getAll)
  .post('/hommy/amount/', createAmount)
  .post('/hommy/', createOne)
  .put('/hommy/:id', updateOne)
  .del('/hommy/:id', deleteOne)
  .post('/auth/login', login)
  .post('/actions/newday/closeday', closeDay);


export default router;