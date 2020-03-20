const Router = require('koa-router')
const Multer = require('@koa/multer')({ dest: 'public/upload' })
const Config = require('../config')
const Loader = require('../utils/load')(Config.Dict)
const { checkToken } = require('../utils/token')

const router = new Router()
const ReqData = async (ctx, next) => {
  Object.assign(ctx.params, ctx.request.body, ctx.query)
  await next()
}

router.get('/', Loader.index.sayHi)
module.exports = router
