import * as KoaRouter from 'koa-router'
import { UserController, InfoController, ArticleController, DynamicController, TagController } from '../controller'
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
	// 文章分类查询
	.get('/public/api/categoryArticles', ArticleController.getCategoryArticles)
	// 获取文章详情
	.get('/public/api/articleDetail', ArticleController.articleDetail)
	// 添加或更新文章
	.post('/api/updateArticle', ArticleController.articleUpdate)
	// 删除文章
	.get('/api/removeArticle', ArticleController.articleRemove)
	// 文章点赞
	.get('/api/likeArticle', ArticleController.articleLikes)
	// 获取动态
	.get('/public/api/getDynamics', DynamicController.getDynamics)
	// 新增动态
	.post('/api/addDynamic', DynamicController.addDynamic)
	// 删除动态
	.get('/api/removeDynamic', DynamicController.removeDynamic)
	// 查找所有标签
	.get('/public/api/getTags', TagController.getTags)
	// 添加或更新标签
	.get('/api/updateTag', TagController.updateTag)
	// 删除标签
	.get('/api/removeTag', TagController.removeTag)
export default router
