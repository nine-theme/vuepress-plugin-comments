const { path } = require('@vuepress/shared-utils')

module.exports = (options) => ({
  define () {
    return {
      COMMENTS_OPTIONS: options || null
    }
  },
  name: '@nine-theme/vuepress-plugin-comments',
  enhanceAppFiles: [
    path.resolve(__dirname, './bin/enhanceAppFile.js')
  ]
})
