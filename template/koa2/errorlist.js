/**
 * 定义错误列表: -9999 token 不合法 100-110 数据库异常信息
 * @Author: ipenman
 * @Date: 2019-07-16 14:52:11
 */
const ErrorList = {
  '-9999': { statusCode: -9999, message: 'invalid token' },
  '100': { statusCode: 100, message: '数据库连接失败' },
  '101': { statusCode: 101, message: '数据库查询无响应' },
  '102': { statusCode: 102, message: '数据库执行失败' },
  '110': { statusCode: 110, message: '接口参数不完整' },
  '111': { statusCode: 111, message: '创建失败' },
  '112': { statusCode: 112, message: '修改阅读数失败' },
  '113': { statusCode: 113, message: '修改失败' },
  // '130': { statusCode: 130, message: '接口参数不完整' },
  '140': { statusCode: 140, message: '账号密码错误' },
  '141': { statusCode: 141, message: '用户无权限' },
  '150': { statusCode: 150, message: '访问无效' },
  // '141': { statusCode: 141, message: '此手机号已绑定' },
  // '142': { statusCode: 142, message: '此手机号已占用' },
  // '150': { statusCode: 150, message: '账号未激活' },
  // '160': { statusCode: 160, message: '用户未登录' },
  // '162': { statusCode: 162, message: '用户已冻结' },
  // '170': { statusCode: 170, message: '原密码输入错误' },
  // '171': { statusCode: 171, message: '密钥输入错误' },
  // '180': { statusCode: 180, message: '密保问题已经存在' },
  // '181': { statusCode: 181, message: '激活地址已过期' },
  // '182': { statusCode: 182, message: '激活失败' },
  // '183': { statusCode: 183, message: '邮箱账号格式不正确' },
  // '184': { statusCode: 184, message: '此数据已存在' },
  // '185': { statusCode: 185, message: '此数据不存在' },
  // '186': { statusCode: 186, message: '发送邮件失败' },
  // '187': { statusCode: 187, message: '安全保护问题答案有误' },
  // '189': { statusCode: 189, message: '邮件发送次数已达上限' },
  // '190': { statusCode: 190, message: '该业务系统被禁用' },
  // '191': { statusCode: 191, message: 'Token不正确' },
  // '192': { statusCode: 192, message: '此业务系统不存在' },
  // '195': { statusCode: 195, message: '网络故障' },
  // '196': { statusCode: 196, message: '验证码过期' },
  '200': { statusCode: 200, message: '上传失败' },
  // '300': { statusCode: 300, message: '粘贴项目时出错' },
  '400': { statusCode: 400, message: '文件地址为空' }
  // '401': { statusCode: 401, message: '此项目为空' },
  // '432': { statusCode: 432, message: '此项目已存在' },
  // '433': { statusCode: 433, message: '项目分享码错误' },
  // '434': { statusCode: 434, message: '项目提取码为空' },
  // '450': { statusCode: 450, message: '获取数据失败' },
  // '451': { statusCode: 451, message: 'MD5码不正确' },
  // '500': { statusCode: 500, message: '路径不正确' },
  // '600': { statusCode: 600, message: '升级中' },
  // '700': { statusCode: 700, message: '无效' },
  // '701': { statusCode: 701, message: '短信超过最大发送量' },
  // '710': { statusCode: 710, message: '版本无效' },
  // '720': { statusCode: 720, message: '版本过低' },
  // '161': { statusCode: 161, message: '用户无权限' },
  // '181': { statusCode: 181, message: '操作用户已达上线' },
  // '281': { statusCode: 281, message: '用户对应状态不正确' },
  // '282': { statusCode: 282, message: '图书已删除' },
  // '283': { statusCode: 283, message: '名称不正确' },
  // '284': { statusCode: 284, message: '名称长度超过规定长度' },
  // '285': { statusCode: 285, message: '名称含有非法字符' },
  // '286': { statusCode: 286, message: '无法更改默认目录' },
  // '287': { statusCode: 287, message: '该目录或以下目录存在文件无法删除' },
  // '288': { statusCode: 288, message: '文件丢失' }
}
module.exports = errorCode => {
  if (errorCode in ErrorList) return ErrorList[errorCode]
  else return { statusCode: -1, error: '未知错误' }
}
