import {Context} from 'koa'
import {ResponseType} from './constants'
import {UserHandler} from '../handler'
class UserController {
    public static async updateUser(ctx : Context) {
        const response = await UserHandler.updateUser()
        const {type, msg, code} = response
        if (type === ResponseType.success) {
            ctx.successReponse(null, msg)
            return
        }
        ctx.errorResponse(code, msg)
    }

    public static async login(ctx : Context) {
        const response = await UserHandler.userLogin(ctx.request.body)
        const {type, msg, code, data} = response
        if (type === ResponseType.success) {
            ctx.successReponse(data, msg)
            return
        }
        ctx.errorReponse(code, msg)
    }
}

export default UserController