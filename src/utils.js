const fs = require('fs')
const chalk = require('chalk')
const readline = require('readline')

exports.log = async (msg = '', type) => {
  switch (type) {
    case 'error':
      console.log(chalk.red(msg))
      process.exit()
      break
    case 'ok':
      console.log(chalk.green(msg))
      break
    case 'warn':
      console.log(chalk.yellow(msg))
      break
    case 'note':
      console.log(chalk.gray(msg))
      break
    default:
      console.log(msg)
      break
  }
}

/* 验证空目录 */
exports.emptyDir = async path => {
  return fs.promises.readdir(path)
}

/* 创建目录 */
exports.mkdir = (path, fetch_child = true) => {
  return fs.promises.mkdir(path, {
    recursive: fetch_child,
    mode: 0755
  })
}

/* 读文件 */
exports.readFile = path => {
  return fs.promises.writeFile(path, { encoding: 'utf8' })
}

/* 写文件 */
exports.writeFile = (data, dest) => {
  return fs.promises.writeFile(dest, data, { encoding: 'utf8', mode: 0755 })
}

/* 拷贝文件 */
exports.copyFile = (src, dest) => {
  return fs.promises.copyFile(src, dest /*, fs.constants.COPYFILE_EXCL */)
}

/* cmd确认 */
exports.confirm = msg => {
  return new Promise(resolve => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
    rl.question(msg, input => {
      rl.close()
      resolve(/^y|yes|ok|true$/i.test(input))
    })
  })
}
