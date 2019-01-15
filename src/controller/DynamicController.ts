import { Context } from 'koa'
import { ResponseType } from './constants'
import { DynamicHelper } from '../helper'
class DynamicController {
	public static async getDynamics(ctx: Context) {
		const response = await DynamicHelper.getDynamicList(ctx.query.pageNum, ctx.query.pageSize)
		const { msg, data, code, type } = response
		if (type === ResponseType.success) {
			ctx.successResponse(data, msg)
			return
		}
		ctx.errorResponse(code, msg)
	}

	public static async addDynamic(ctx: Context) {
		const response = await DynamicHelper.addDynamic(ctx.request.body)
		const { msg, code, type } = response
		if (type === ResponseType.success) {
			ctx.successResponse(null, msg)
			return
		}
		ctx.errorResponse(code, msg)
	}

	public static async removeDynamic(ctx: Context) {
		const response = await DynamicHelper.removeDynamicById(ctx.query.id)
		const { msg, code, type } = response
		if (type === ResponseType.success) {
			ctx.successResponse(null, msg)
			return
		}
		ctx.errorResponse(code, msg)
	}
}

export default DynamicController
