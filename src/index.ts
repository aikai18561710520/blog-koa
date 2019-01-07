import * as Koa from 'koa'

const port : number = 8001
const app = new Koa()

app.use(async(ctx) => {
    console.log(ctx);

    ctx.body = 'hello world'
})
app.listen(port)