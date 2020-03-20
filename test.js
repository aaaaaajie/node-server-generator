const utils = require('./src/utils')
const atj = require('await-to-js')
async function readDir() {
  const [err, result] = await atj.to(utils.emptyDir('./12'))
  if (err) utils.log(err, 'error')
  else utils.log(result)
}
// readDir()
async function copyFile() {
  const [err, result] = await atj.to(utils.copyFile('1.txt', './'))
  if (err) utils.log(err, 'error')
  else utils.log(result)
}
copyFile()