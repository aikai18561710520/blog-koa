import { ArticlesModel } from '../models'

interface IParam {
	pageSize: number | string
	pageNum: number | string
	tagName: string
	title: string
	type: string
	nature: string
}
interface IArticle {
	id?: string
	content?: string
	public?: number
	articleTag?: string
	nature?: string
	type?: string
	abstract?: string
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
	// 添加或更新文章
	public static async updateArticle(article: IArticle) {
		const { id } = article
		try {
			if (id) {
				await ArticlesModel.create({ ...article, createTime: new Date() }, (error: string, obj: object) => {
					if (error) {
						throw error
					} else {
						return obj
					}
				})
				return {
					type: 'SUCCESS',
					msg: '添加成功',
				}
			}
			await ArticlesModel.update({ _id: id }, { ...article })
			return {
				type: 'SUCCESS',
				msg: '更新成功',
			}
		} catch (error) {
			return {
				type: 'ERROR',
				msg: error.message,
				code: 500,
			}
		}
	}

	// 删除文章
	public static async removeArticleById(id: string) {
		try {
			await ArticlesModel.remove({ _id: id })
			return {
				type: 'SUCCESS',
				msg: '删除成功',
			}
		} catch (error) {
			return {
				code: 500,
				type: 'ERROR',
				msg: error.message,
			}
		}
	}
}

export default ArticleHelper
