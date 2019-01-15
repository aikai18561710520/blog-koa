import { Context } from 'koa'
import { ResponseType } from './constants'
import { UserHelper } from '../helper'
class UserController {
	public static async updateUser(ctx: Context) {
		const response = await UserHelper.updateUser()
		const { type, msg, code } = response
		if (type === ResponseType.success) {
			ctx.successResponse(null, msg)
			return
		}
		ctx.errorResponse(code, msg)
	}

	public static async login(ctx: Context) {
		const response = await UserHelper.userLogin(ctx.request.body)
		const { type, msg, code, data } = response
		if (type === ResponseType.success) {
			ctx.successReponse(data, msg)
			return
		}
		ctx.errorResponse(code, msg)
	}
}

export default UserController
