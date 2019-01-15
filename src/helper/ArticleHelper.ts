import { ArticlesModel } from '../models'

interface IParam {
	pageSize: number | string
	pageNum: number | string
	tagName: string
	title: string
	type: string
	nature: string
}
class ArticleHelper {
	// 文章搜索
	public static async getArticles(param: IParam) {
		try {
			const { pageNum, pageSize, tagName, title, type, nature } = param
			let data: object
			if (title) {
				data = { title: new RegExp(title) }
			}
			if (tagName) {
				data = { ...data, 'tag.name': tagName }
			}
			if (type) {
				data = { ...data, type }
			}
			if (nature) {
				data = { ...data, nature }
			}
			const Skip: number = Number(pageNum) * Number(pageSize) - Number(pageNum)
			const articles = await ArticlesModel.find(data)
				.sort({ createTime: -1 })
				.limit(Number(pageSize))
				.skip(Skip)
			const total = await ArticlesModel.count({}, (err: string, count: number) => {
				return err ? false : count
			})
			return {
				msg: 'success',
				data: {
					articles,
					total,
				},
				type: 'SUCCESS',
			}
		} catch (error) {
			return {
				msg: error.message,
				type: 'ERROR',
				code: 500,
			}
		}
	}

	public static async findArticleById(id: string) {
		try {
			const detail: any = await ArticlesModel.findById(id)
			await ArticlesModel.update({ _id: detail._id }, { access: ++detail.access })
			return {
				msg: 'success',
				data: {
					...detail,
				},
				type: 'SUCCESS',
			}
		} catch (error) {
			return {
				code: 500,
				msg: 'article not found',
				type: 'ERROR',
			}
		}
	}
}

export default ArticleHelper
