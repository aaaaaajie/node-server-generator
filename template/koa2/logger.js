const tracer = require('tracer')
const path = require('path')
const fs = require('fs')
const filePath = path.join(process.cwd(), 'log')

exports.write = (msg, level = 'log', path = filePath) => {
  !fs.existsSync(path) && fs.mkdirSync(path)
  const logger = tracer.dailyfile({ root: path })
  logger[level](msg)
}
