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

router.post(
  '/upload',
  Multer.single('file'),
  ReqData,
  Loader.blog.Article.upload
)
router.get('/', ctx => {
  ctx.body = { message: '测试接口' }
})
//#region 管理员
router.post('/user/login', ReqData, Loader.user.User.login)
router.get('/user', ReqData, checkToken, Loader.user.User.info)
router.post('/article', ReqData, checkToken, Loader.blog.Article.save)
router.get('/manage/articles', ReqData, checkToken, Loader.manage.Article.list)
router.get('/manage/comments', ReqData, checkToken, Loader.manage.Comments.list)
router.delete(
  '/manage/comment',
  ReqData,
  checkToken,
  Loader.manage.Comments.updateStatus
)
router.get(
  '/classifications',
  ReqData,
  checkToken,
  Loader.blog.Classification.list
)
router.put(
  '/classification/:id/status',
  ReqData,
  checkToken,
  Loader.manage.Classification.removeShelf
)
router.put(
  '/classification/:id/name',
  ReqData,
  checkToken,
  Loader.manage.Classification.updateName
)
router.post(
  '/classification',
  ReqData,
  checkToken,
  Loader.manage.Classification.create
)
router.delete('/article', ReqData, checkToken, Loader.blog.Article.delete)
//#endregion
//#region 普通人
router.get('/articles', ReqData, Loader.blog.Article.list)
router.get('/article', ReqData, Loader.blog.Article.info)
router.put('/article/viewno', ReqData, Loader.blog.Article.updateViewCount)
router.get('/article/rank', ReqData, Loader.blog.Article.getRank)
router.get(
  '/classifitionsCount',
  ReqData,
  Loader.blog.Classification.classificationCount
)
router.post('/article/comments', ReqData, Loader.blog.Comments.create)
router.get(
  '/article/:article_id/comments',
  ReqData,
  Loader.blog.Comments.listByArticle
)
//#endregion
module.exports = router
