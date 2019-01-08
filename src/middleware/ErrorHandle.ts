import {Context} from 'koa'

const errorHandle = async(ctx : Context, next : any) => {
    return next().catch((error : any) => {
        if (error.status === 401) {
            ctx.status = 200
            ctx.errorReponse({code: 401, msg: '游客暂时没有权限'})
        } else {
            throw error
        }
    })
}
export default errorHandle