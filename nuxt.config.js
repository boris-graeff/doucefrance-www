const routes = {
  fr: [
    '/', '/chambres', '/hotel', '/acces', '/seminaires', '/village',
    '/chambres/duplex', '/chambres/suites', '/chambres/suites-large', '/chambres/suites-grand-large', '/chambres/suite-exception', '/chambres/appartements', '/chambres/suites-sans-kitchenette'
  ],
  en: [
    '/en', '/en/rooms', '/en/hotel', '/en/plan', '/en/seminars', '/en/village',
    '/en/rooms/duplex', '/en/rooms/suites', '/en/rooms/large-suites', '/en/rooms/extra-large-suites', '/en/rooms/luxury-suite', '/en/rooms/apartments', '/en/rooms/no-kitchen-suite'
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
  loading: { color: '#3B8070' },
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
    { src: '~/plugins/vue-carousel.js', ssr: false },
  ],
  modules: [
    '@nuxtjs/sitemap'
  ],
  generate: {
    routes: [...routes.fr, ...routes.en]
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
