import bodyParser from 'koa-bodyparser';
import jwt from 'koa-jwt';
import logger from 'koa-logger';
import cors from 'koa-cors';
import app from './app';
import config from './config';
import router from './routes';


app.use(logger());
app.use(cors());

app.use(jwt({ secret: config }).unless({
    path: [/^\/auth\/login/]}));

app.use(bodyParser());
app.use(router.routes());

app.listen(3001, () => console.log('server is up'));


