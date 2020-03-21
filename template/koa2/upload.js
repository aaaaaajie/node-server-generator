const FS = require('fs')
const Path = require('path')
const Crypto = require('crypto')
const oMD5 = require('../DAL/MD5')
const TencentAPI = require('./TencentAPI')
const COS = new TencentAPI()

/**
 * 生成md5
 * @param {*} data
 */
const getMD5 = URL => {
  return new Promise(resolve => {
    const MD5 = Crypto.createHash('md5')
    const Stream = FS.createReadStream(URL)
    Stream.on('data', function(chunk) {
      MD5.update(chunk)
    })
    Stream.on('end', function() {
      resolve(MD5.digest('hex'))
    })
  })
}

/**
 * 上传
 * @param {*} ctx
 */
const Upload = async ctx => {
  let file = ctx.request.file
  const sMD5 = await getMD5(
    Path.join(process.cwd(), 'public/upload', file.filename)
  )
  let oResult = await oMD5.info({ id: sMD5 })
  if (oResult.hasError) return oResult
  if (oResult.data) {
    oResult.data = {
      statusCode: 200,
      Location: oResult.data.location
    }
    return oResult
  }
  oResult = await COS.upload({
    fileType: 'image',
    sourcePath: Path.join(process.cwd(), 'public/upload', file.filename),
    fileName: file.originalname
  })
  if (oResult.hasError) return oResult
  if (oResult.data) {
    const Result = await oMD5.insert({
      id: sMD5,
      location: oResult.data.Location
    })
    if (Result.hasError) return Result
  }
  try {
    FS.unlinkSync(Path.join(process.cwd(), 'public/upload', file.filename))
  } catch (error) {
    oResult.hasError = true
    oResult.message = error
    oResult.data = null
  }
  return oResult
}

module.exports = Upload
