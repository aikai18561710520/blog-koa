import * as KoaRouter from 'koa-router'

const router = new KoaRouter()

router.get('/', (req, res) => {
    console.log(arguments);
    req.body = 'hello world!'

})