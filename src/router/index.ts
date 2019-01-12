import * as KoaRouter from 'koa-router'
import {UserController} from '../controller'
const router = new KoaRouter()

router
// 登录
    .post('/api/login', UserController.login)
// 更新用户信息
    .post('/api/updateUser', UserController.updateUser)
// 获取博客首页数据
    .get('/public/api/blog')

export default router