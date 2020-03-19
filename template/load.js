const oFS = require('fs')
const path = require('path')

/**
 * 加载模块
 * @param {*} path 
 * @param {*} name 
 */
const load = (path, name) => {
    if (name) return require(path + name);
    return require(path)
};

/**
 * 
 * @param {*} dir 
 */
const loadDict = dir => {
    let patcher = {}
    oFS.readdirSync(__dirname + '/' + dir).forEach(sName => {
        if (!/\.js$/.test(sName)) return
        const name = path.basename(sName, '.js');  // 返回文件扩展名
        patcher.__defineGetter__(name, load.bind(null, './' + dir + '/', name))
    })
    return patcher;
}

/**
 * 读取所有
 * @param {*} sPath 
 */
const loadAll = sPath => {
    const oModule = {};
    for (let key in sPath) {
        const sModule = sPath[key]
        oModule[key] = loadDict(sModule)
    }
    return oModule
}

module.exports = loadAll