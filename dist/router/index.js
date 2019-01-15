"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const KoaRouter = require("koa-router");
const controller_1 = require("../controller");
const router = new KoaRouter();
router
    // 登录
    .post('/api/login', controller_1.UserController.login)
    // 更新用户信息
    .post('/api/updateUser', controller_1.UserController.updateUser)
    // 获取博客首页数据
    .get('/public/api/blog');
exports.default = router;
//# sourceMappingURL=index.js.map