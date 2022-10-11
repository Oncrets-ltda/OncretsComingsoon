// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt'
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
