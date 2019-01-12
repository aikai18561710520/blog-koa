import {DB, Schema} from '../DB'

const BaseData = new Schema({
    // 访问量
    access: {
        type: Number,
        default: 0
    },
    // 每月访问量
    accessOfMonth: Array
})

const BaseDataModel = DB.model('basedata', BaseData)
export default BaseDataModel