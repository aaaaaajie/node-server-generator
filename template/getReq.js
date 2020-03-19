module.exports = {
  getClientIP: req => {
    let api =
      req.headers['x-forwarded-for'] || // 判断是否有反向代理 IP
      req.headers['x-real-ip'] ||
      req.connection.remoteAddress || // 判断 connection 的远程 IP
      req.socket.remoteAddress || // 判断后端的 socket 的 IP
      req.connection.socket.remoteAddress
    // if (api.includes('::ffff:') !== -1) api = api.substring(7)
    return api
  }
}
