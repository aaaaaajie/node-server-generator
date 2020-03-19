#!/usr/bin/env node
const program = require('commander')
const chalk = require('chalk')

console.log(chalk.green('Hello,cli!'))
const ora = require('ora')
const proce = ora('正在下载模板...')
proce.start()
proce.fail() // 失败调用
proce.succeed() // 成功调用
program 
  .version(require('./package').version, '-v, --version')
  .usage('[options] [dir]')
  .option('-e, --ejs')

program.command('create [project-name]').action(name => console.log(name))

program.parse(process.argv)
console.log(program.ejs)
