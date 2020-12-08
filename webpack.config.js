const Plugins = require('@platform/tools/configs/plugins')
const { getDefaultConfig, getEnv } = require('@platform/tools/configs')

const config = getDefaultConfig({
  target: 'node',
  module: '@platform/fe-rn-shadow-module',
  entry: './src/index.ts',
  libraryTarget: 'commonjs2',
  plugins: [new Plugins.IndexDtsGenerator({ folder: '' })],
  externals: require('./externals'),
  allowTsInNodeModules: false,
})

module.exports = {
  ...config,
  optimization: {
    minimize: true,
  },
  devtool: getEnv() === 'development' ? config.devtool : undefined
}
