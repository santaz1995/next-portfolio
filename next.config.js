const env = process.env.NODE_ENV === "production";
const withImages = require('next-images')

module.exports = withImages({
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    }
  },
  images: {
    domains: [env ? 'https://santaz1995.github.io/next-portfolio/' : '']
  },
  baseUrl: env ? '/next-portfolio/' : '',
  basePath: env ? '/next-portfolio' : '',
  assetPrefix: env ? '/next-portfolio/' : '',
  webpack: (config, { }) => {
    config.module.rules = config.module.rules.map(rule => {
      if(rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    return config
  }
})
