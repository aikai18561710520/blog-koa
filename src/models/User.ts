import {DB, Schema} from '../DB'

const user = new Schema({
    // 用户名
    userName: String,
    // 密码
    password: String,
    // 用户权限
    role: String
})

const userModel = DB.model('user', user)

export default userModel