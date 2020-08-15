const Theme = require('./theme.js')

const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: Theme,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
