import {DB, Schema} from '../DB'
import {guestAvatar} from '../config'
const user = new Schema({
    // 用户名
    userName: String,
    // 密码
    password: String,
    // 用户权限
    role: String,
    // 用户头像
    avatar: {
        type: String,
        default: guestAvatar
    },
    // 用户名称
    realName: {
        type: String,
        default: 'guest'
    },
    // 创建时间
    createTime: Date
})

const userModel = DB.model('user', user)

export default userModel