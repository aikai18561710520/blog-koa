import { DB, Schema } from '../DB'

const Tags = new Schema({
	// 标签名
	name: String,
	// 标签id
	id: Schema.Types.ObjectId,
	// 标签下文章数量
	articleNum: {
		type: Number,
		default: 0,
	},
})

const TagsModel = DB.model('tags', Tags)

export default TagsModel
