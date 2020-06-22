const pluginConf = require('./config/pluginConf.js');
const navConf = require('./config/navConf.js');
const headConf = require('./config/headConf.js');

module.exports = {
  title: '曾银田的个人博客',
  description: '曾银田的个人博客',
  head: headConf,
  plugins: pluginConf,

  themeConfig: {
    search: false,
    nav: navConf,
    sidebarDepth: 2,
  }
}