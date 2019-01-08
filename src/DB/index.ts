import * as mongoose from 'mongoose'
import {MongoDBpath} from '../config';
(mongoose as any).Promise = global.Promise
export const DB = mongoose
export const {
    Schema
} = DB

export const connect = () => {
    DB.connect(MongoDBpath)
    // 连接数据库错误
    DB
        .connection
        .on("error", (error : any) => {
            console.error('连接数据库出错', error);
        })

    DB
        .connection
        .on('open', () => {
            console.log('数据库连接成功');
        })

    return DB
}