import { TagsModel } from '../models'
interface IParam {
	name: string
	id?: string
}
class TagsHelper {
	// 查询所有的tag标签
	public static async getAllTag() {
		try {
			const tags = await TagsModel.find({})
			return {
				type: 'SUCCESS',
				data: tags,
				msg: 'success',
			}
		} catch (error) {
			return {
				type: 'ERROR',
				msg: error.message,
				code: 500,
			}
		}
	}
	// 添加或更新标签
	public static async updateTag(param: IParam) {
		try {
			const { name, id } = param
			if (!name) {
				throw new Error('name is not found')
			}
			if (!id) {
				await TagsModel.create({ ...param })
				return {
					type: 'SUCCESS',
					msg: '添加成功',
				}
			}
			await TagsModel.update({ id }, { ...param })
			return {
				type: 'SUCCESS',
				msg: '添加成功',
			}
		} catch (error) {
			return {
				type: 'ERROR',
				msg: error.message,
				code: 500,
			}
		}
	}

	// 删除标签
	public static async removeTagById(id: string) {
		try {
			if (!id) {
				throw new Error('tagId is not found')
			}
			await TagsModel.remove({ id })
			return {
				type: 'SUCCESS',
				msg: '添加成功',
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

export default TagsHelper
