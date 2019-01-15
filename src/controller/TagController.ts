import { Context } from 'koa'
import { ResponseType } from './constants'
import { TagsHelper } from '../helper'
class TagController {
	public static async getTags(ctx: Context) {
		const response = await TagsHelper.getAllTag()
		const { data, code, type, msg } = response
		if (type === ResponseType.success) {
			ctx.successResponse(data, msg)
			return
		}
		ctx.errorResponse(code, msg)
	}

	public static async updateTag(ctx: Context) {
		const response = await TagsHelper.updateTag(ctx.request.body)
		const { code, type, msg } = response
		if (type === ResponseType.success) {
			ctx.successResponse(null, msg)
			return
		}
		ctx.errorResponse(code, msg)
	}

	public static async removeTag(ctx: Context) {
		const response = await TagsHelper.removeTagById(ctx.query.id)
		const { code, type, msg } = response
		if (type === ResponseType.success) {
			ctx.successResponse(null, msg)
			return
		}
		ctx.errorResponse(code, msg)
	}
}
export default TagController
