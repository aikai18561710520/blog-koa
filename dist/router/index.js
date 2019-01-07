"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const KoaRouter = require("koa-router");
const router = new KoaRouter();
router.get('/', (req, res) => {
    console.log(arguments);
    req.body = 'hello world!';
});
//# sourceMappingURL=index.js.map