"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const mongoDB = require("./DB");
const config = require("./config");
const koaBodyparser = require("koa-bodyparser");
const jwt = require("koa-jwt");
const ReponseFormat_1 = require("./middleware/ReponseFormat");
const ErrorHandle_1 = require("./middleware/ErrorHandle");
const router_1 = require("./router");
const app = new Koa();
mongoDB.connect();
app
    .use(ReponseFormat_1.default())
    .use(ErrorHandle_1.default)
    .use(jwt({ secret: 'admin' }).unless({
    path: [/^\/public/, '/api/login', '/api/updateUser']
}))
    .use(koaBodyparser())
    .use(router_1.default.routes())
    .use(router_1.default.allowedMethods());
app.listen(config.Port);
//# sourceMappingURL=index.js.map