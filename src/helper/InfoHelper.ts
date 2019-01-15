import { ArticlesModel, BaseDataModel, TagsModel, DynamicModel } from '../models'
// interface IParameter {

// }
class InfoHelper {
	public static async getBlogInfo() {
		try {
			// 查找文章数量
			const articleNum: number = await ArticlesModel.count({})
			// 查找标签列表
			const tagList: any[] = await TagsModel.find({})

			return {
				msg: 'success',
				data: {
					articleNum,
					tagList,
				},
				type: 'SUCCESS',
			}
		} catch (error) {
			console.log(error)
			return {
				msg: error.message,
				type: 'ERROR',
				code: 500,
			}
		}
	}
}

export default InfoHelper
