import { Context } from 'koa'
import { ResponseType } from './constants'
import { InfoHelper } from '../helper'
class InfoController {
	public static async getInfo(ctx: Context) {
		const response = await InfoHelper.getBlogInfo()
		const { type, msg, code, data } = response
		if (type === ResponseType.success) {
			ctx.successReponse(data, msg)
			return
		}
		ctx.errorResponse(code, msg)
	}
}

export default InfoController
