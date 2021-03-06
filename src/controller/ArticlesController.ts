import { Context } from 'koa'
import { ResponseType } from './constants'
import { ArticleHelper } from '../helper'
class ArticleController {
	public static async getArticles(ctx: Context) {
		const response = await ArticleHelper.getArticles(ctx.request.body)
		const { type, msg, code, data } = response
		if (type === ResponseType.success) {
			ctx.successResponse(data, msg)
			return
		}
		ctx.errorResponse(code, msg)
	}
	public static async getCategoryArticles(ctx: Context) {
		const response = await ArticleHelper.findCategoryArticles()
		const { type, msg, code, data } = response
		if (type === ResponseType.success) {
			ctx.successResponse(data, msg)
			return
		}
		ctx.errorResponse(code, msg)
	}

	public static async articleDetail(ctx: Context) {
		const response = await ArticleHelper.findArticleById(ctx.query.id)
		const { type, msg, code, data } = response
		if (type === ResponseType.success) {
			ctx.successResponse(data, msg)
			return
		}
		ctx.errorResponse(code, msg)
	}

	public static async articleUpdate(ctx: Context) {
		const response = await ArticleHelper.updateArticle(ctx.request.body)
		const { type, msg, code } = response
		if (type === ResponseType.success) {
			ctx.successResponse(null, msg)
			return
		}
		ctx.errorResponse(code, msg)
	}

	public static async articleRemove(ctx: Context) {
		const response = await ArticleHelper.removeArticleById(ctx.query.id)
		const { type, msg, code } = response
		if (type === ResponseType.success) {
			ctx.successResponse(null, msg)
			return
		}
		ctx.errorResponse(code, msg)
	}

	public static async articleLikes(ctx: Context) {
		const response = await ArticleHelper.likeArticle(ctx.query.id)
		const { type, msg, code, data } = response
		if (type === ResponseType.success) {
			ctx.successResponse(data, msg)
			return
		}
		ctx.errorResponse(code, msg)
	}
}

export default ArticleController
