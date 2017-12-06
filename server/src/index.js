import app from './app';
import bodyParser from 'koa-bodyparser';
import User from './models/user';
import Hommie from './models/hommie';
import router from './routes';
import bcrypt from 'bcrypt';
import koaJwt from './jwt';
import jwt from 'koa-jwt'
import config from './config'



app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);

});
app.use(jwt({ secret: config }).unless({ path: [/^\/auth\/login/] }));

app.use(bodyParser());
app.use(router.routes());

app.listen(3001, () => console.log('server is up'));

