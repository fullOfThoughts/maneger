const Theme = require('./theme.js')
const {
  override,
  addDecoratorsLegacy,
  fixBabelImports,
  addLessLoader,
} = require('customize-cra')
module.exports = override(
  addDecoratorsLegacy(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: Theme,
    },
  })
)
