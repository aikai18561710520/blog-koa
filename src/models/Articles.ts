import { DB, Schema } from '../DB'

const Articles = new Schema({
	// 创建时间
	createTime: Date,
	// 文章标题
	title: String,
	// 是否公开
	public: {
		type: Number,
		default: 1, // 文章公开： 1  不公开： 0
	},
	likeNum: {
		// 点赞数
		type: Number,
		default: 0,
	},
	// 文章标签
	articleTag: {
		type: Schema.Types.ObjectId,
		ref: 'tags',
	},
	// 原创或转载
	nature: String,
	// 文章类型
	type: String,
	// 文章内容
	content: String,
	// 简介
	abstract: String,
	// 访问次数
	access: { type: Number, default: 0 },
})

const ArticlesModel = DB.model('articles', Articles)

export default ArticlesModel
