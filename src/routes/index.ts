import Router from 'koa-router';
import api from './api/index';

const routes = new Router();

routes.use('/api', api.routes());
routes.get('/', ctx => {
    ctx.body = 'hello routes';
})

export default routes;