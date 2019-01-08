import * as KoaRouter from 'koa-router'
import {UserController} from '../controller'
const router = new KoaRouter()

router
// 登录
    .post('/api/login', UserController.login)
// 更新用户信息
    .post('/api/updateUser', UserController.updateUser)

export default router