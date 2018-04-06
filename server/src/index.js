import bodyParser from 'koa-bodyparser';
import jwt from 'koa-jwt';
import Router from 'koa-router';
import logger from 'koa-logger';
import cors from 'koa-cors';
import app from './app';
import config from './config';
import models from './models';
import {
  login,
  closeDay,
  getOne,
  getAll,
  health,
  createAmount,
  createOne,
  deleteOne,
  updateOne
} from './controllers/controller';

const {
  JWTSecret,
  port
} = config;

const {Hommy, HommieBalance} = models;
const router = new Router();
const attributes = ['id', 'hommyId', 'date', 'debt', 'amount'];

router
  .get('/hommy/:id', getOne)
  .get('/hommy/', getAll)
  .post('/hommy/amount/', createAmount)
  .post('/hommy/', createOne)
  .put('/hommy/:id', updateOne)
  .del('/hommy/:id', deleteOne)
  .post('/auth/login', login)
  .post('/actions/newday/closeday', closeDay);

app.use(logger());
app.use(cors());
app.use(jwt({ secret: JWTSecret }).unless({
    path: [/^\/auth\/login/]}));
app.use(bodyParser());
app.use(router.routes());

app.listen(port, () =>
  console.log(`server is runnig on port: ${port}`)
);


