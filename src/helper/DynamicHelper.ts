import { DynamicModel } from '../models'
interface IParam {
	content: string
	isPublic?: number
	pics: string[]
}
class DynamicHelper {
	// 动态列表查询
	public static async getDynamicList(pageNum: number, pageSize: number) {
		try {
			const result = await DynamicModel.find({})
				.sort({ createTime: -1 })
				.limit(Number(pageSize))
				.skip((Number(pageNum) - 1) * Number(pageSize))
			return {
				type: 'SUCCESS',
				data: result,
				msg: 'success',
			}
		} catch (error) {
			return {
				type: 'ERROR',
				code: 500,
				msg: error.message,
			}
		}
	}
	// 发布动态
	public static async addDynamic(param: IParam) {
		try {
			const { content, isPublic, pics } = param
			if (!content) {
				throw new Error('content内容不能为空')
			}

			await DynamicModel.create({
				content,
				public: isPublic,
				pics: pics ? pics : [],
			})

			return {
				type: 'SUCCESS',
				msg: '发布动态成功',
			}
		} catch (error) {
			return {
				type: 'ERROR',
				msg: error.message,
				code: 500,
			}
		}
	}

	// 根据id删除动态
	public static async removeDynamicById(id: string) {
		try {
			await DynamicModel.remove({ id })
			return {
				type: 'SUCCESS',
				msg: '删除成功',
			}
		} catch (error) {
			return {
				type: 'ERROR',
				msg: error.message,
				code: 500,
			}
		}
	}
}

export default DynamicHelper
