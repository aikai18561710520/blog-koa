import { userModel } from '../models'
import * as jwt from 'jsonwebtoken'
interface IUser {
	userName?: string
	password?: string
	userRole?: string
}

class UserHelper {
	public static async updateUser() {
		const response = await userModel.create({ password: 'guest', userName: 'guest', role: 'guest', createTime: new Date() })
		if (!response) {
			return { msg: '添加用户出错', type: 'ERROR', code: 500 }
		}
		return { msg: '添加新用户成功', type: 'SUCCESS' }
	}

	public static async userLogin(user: IUser) {
		const response: any = await userModel.findOne({ userName: user.userName })
		if (!response) {
			return { msg: '找不到用户名', type: 'ERROR', code: 404 }
		}

		if (user.password !== response.password) {
			return { msg: '密码错误', type: 'ERROR', code: 500 }
		}
		const { userName, _id, role } = response

		if (role === 'guest') {
			const token = jwt.sign({ _id }, 'guest')
			return {
				msg: '登陆成功,您现在是游客',
				type: 'SUCCESS',
				data: {
					token,
					role,
					userName,
				},
			}
		}
		if (role === 'admin') {
			const token = jwt.sign(
				{
					_id,
				},
				'admin'
			)
			return {
				msg: '欢迎回来,伟大的管理员',
				type: 'SUCCESS',
				data: {
					token,
					role,
					userName,
				},
			}
		}
	}
}

export default UserHelper
