const custom = require('../web/webpack.config')

module.exports = {
  stories: [
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/icons/*.stories.@(js|jsx|ts|tsx)'
  ],
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: { ...config.resolve, alias: { ...config.resolve.alias, ...custom.resolve.alias } },
      module: { ...config.module, rules: custom.module.rules },
    }
  },
}