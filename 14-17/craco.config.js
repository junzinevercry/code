const CracoLessPlugin = require('craco-less');
const CracoLessPlugins = require('craco-less-plugin')
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#2F54EB','@cwj-color':"#694f40" },
            javascriptEnabled: true,
          }
        }
      }
    }
  ]
};