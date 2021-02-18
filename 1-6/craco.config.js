const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#ce2371','@cwj-color':"#694f40" },
            javascriptEnabled: true,
          }
        }
      }
    }
  ]
};