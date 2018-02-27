// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)
const isProd = (process.env.NODE_ENV || 'production') === 'production'
process.env.TEST = 'TRUE'

const debug = process.env.NODE_ENV !== 'production'
module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' }
      // '/articles': { page: '/articles' }
    }
  },
  assetPrefix: isProd ? '/jog-portfolio-react' : '',
}
