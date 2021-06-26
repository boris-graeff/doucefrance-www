import categories from './config/categories.json'

const routes = {
  fr: [
    '/', '/chambres', '/hotel', '/acces', '/seminaires', '/village', '/faq',
    ...categories.map(category => `/chambres/${category.routes.fr}`)
  ],
  en: [
    '/en', '/en/rooms', '/en/hotel', '/en/plan', '/en/seminars', '/en/village', '/en/faq',
    ...categories.map(category => `/en/rooms/${category.routes.en}`)
  ]
}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Relais Hôtelier Douce France',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'DouceFrance hotel website' },
      { property: 'og:url', content: 'http://doucefrance.fr'},
      { property: 'og:type', content: 'website'},
      { property: 'og:title', content: 'Relais Hôtelier Douce France'},
      { property: 'og:description', content: 'Relais Hôtelier Veules les Roses Normandie'},
      { property: 'og:image', content: '/images/hotel-veules-les-roses.jpg'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Cabin|Quicksand' }
    ],
    script: [
      { src: '//widget.customer-alliance.com/reviews/js/standard/920e76d28180477f.js', async: true }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#374266' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    middleware: 'i18n'
  },
  plugins: [
    '~/plugins/i18n.js',
    { src: '~/plugins/vue-smart-carousel.js', ssr: false },
    { src: '~/plugins/smoothscroll-polyfill.js', ssr: false },
  ],
  modules: [
    '@nuxtjs/gtm',
    '@nuxtjs/sitemap'
  ],
  generate: {
    routes: [...routes.fr, ...routes.en]
  },
  gtm: {
    id: process.env.GOOGLE_TAGMANAGER_ID
  },
  sitemap: {
    generate: true,
    hostname: 'http://www.doucefrance.fr',
    routes: [
      ...routes.fr.map((route, index) => ({
        url: route,
        changefreq: 'yearly',
        links: [
          { lang: 'en', url: routes.en[index] }
        ]
      })),
      ...routes.en.map((route, index) => ({
        url: route,
        changefreq: 'yearly',
        links: [
          { lang: 'fr', url: routes.fr[index] }
        ]
      }))
    ]
  }
}
