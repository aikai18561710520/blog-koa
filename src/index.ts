import * as Koa from 'koa'
import * as mongoDB from './DB'
import * as config from './config'
import * as koaBodyparser from 'koa-bodyparser'
import * as jwt from 'koa-jwt'
import ReponseFormat from './middleware/ReponseFormat'
import errorHandle from './middleware/ErrorHandle'
import router from './router'
const app = new Koa()
mongoDB.connect()
app
    .use(ReponseFormat())
    .use(errorHandle)
    .use(jwt({secret: 'admin'}).unless({
        path: [/^\/public/, '/api/login', '/api/updateUser']
    }))
    .use(koaBodyparser())
    .use(router.routes())
    .use(router.allowedMethods())
app.listen(config.Port)