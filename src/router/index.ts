import * as KoaRouter from 'koa-router'
import { UserController, InfoController, ArticleController } from '../controller'
const router = new KoaRouter()

router
	// 登录
	.post('/api/login', UserController.login)
	// 更新用户信息
	.post('/api/updateUser', UserController.updateUser)
	// 获取博客首页数据
	.get('/public/api/blog', InfoController.getInfo)
	// 文章列表查询
	.post('/public/api/articles', ArticleController.getArticles)
	// 获取文章详情
	.get('/public/api/articleDetail', ArticleController.articleDetail)
export default router
