import { DB, Schema } from '../DB'

const Dynamic = new Schema({
	id: Schema.Types.ObjectId,
	// 创建时间
	createTime: {
		type: Date,
		default: Date.now(),
	},
	// 动态内容
	content: String,
	// 是否公开  0 为私有，1 为公开
	public: {
		type: Number,
		default: 0,
	},
	// 动态的图片地址列表
	pics: Array,
})

const DynamicModel = DB.model('dynamic', Dynamic)

export default DynamicModel
