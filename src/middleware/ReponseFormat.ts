import { Context } from 'koa'

const ReponseFormat = () => {
	const SuccessHandle = (ctx: Context) => {
		return (data: object | null, msg: string) => {
			ctx.set({ 'Content-Type': 'application/json' })

			ctx.body = {
				code: 200,
				data,
				msg: msg || '请求成功',
			}
		}
	}
	const ErrorHandle = (ctx: Context) => {
		return (code: number, msg: string) => {
			ctx.set({ 'Content-Type': 'application/json' })
			ctx.body = {
				code,
				data: null,
				msg: msg || '请求出错',
			}
		}
	}
	return async (ctx: Context, next: any) => {
		ctx.successResponse = SuccessHandle(ctx)
		ctx.errorResponse = ErrorHandle(ctx)
		await next()
	}
}

export default ReponseFormat
