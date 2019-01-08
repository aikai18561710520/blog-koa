import {Context} from 'koa'
import {ReponseType} from './constants'
import {UserHandler} from '../handler'
class UserController {
    public static async updateUser(ctx : Context) {
        const response = await UserHandler.updateUser()
        ctx.body = response
    }

    public static async login(ctx : Context) {
        const response = await UserHandler.userLogin(ctx.request.body)
        const {type, msg, code, data} = response
        if (type === ReponseType.success) {
            ctx.successReponse(data, msg)
            return
        }
        ctx.errorReponse(code, msg)
    }
}

export default UserController