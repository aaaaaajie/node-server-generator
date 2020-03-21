/**
 *  token 加密 解密
 * @Author: ipenman
 * @Date: 2019-07-26 14:08:50
 */
const JWT = require("jsonwebtoken");
const { security } = require("../config");
const ErorrList = require("./errorlist");

const createToken = data => {
  return JWT.sign(data, security.secretKey, {
    expiresIn: security.expiresIn
  });
};

// 检查 token
const checkToken = async (ctx, next) => {
  // axios.js 中设置了 Auth
  const Auth = ctx.get("Authorization");
  if (Auth === "") {
    ctx.throw(401, "no token detected in http headerAuthorization");
  }
  const token = Auth.split(" ")[1];
  // 检验 token 是否已过期
  try {
    const oResult = await JWT.verify(token, security.secretKey);
    ctx.userData = JSON.parse(oResult.userData);
  } catch (err) {
    ctx.body = ErorrList(-9999);
    return;
  }
  await next();
};

module.exports = { createToken, checkToken };
