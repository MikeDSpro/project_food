import koaJwt from 'koa-jwt';
import jwtsecret from './config';

export default koaJwt({
  secret: jwtsecret
});