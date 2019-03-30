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
      { property: 'og:type', content: ''},
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
  generate: {
    routes: [
      '/', '/chambres', '/hotel', '/acces', '/seminaires', '/village',
      '/en', '/en/rooms', '/en/hotel', '/en/plan', '/en/seminars', '/en/village',
      '/chambres/duplex', '/chambres/suites', '/chambres/grandes-suites', '/chambres/tres-grandes-suites', '/chambres/suite-exception', '/chambres/appartements', '/chambres/suites-sans-kitchenette',
      '/rooms/duplex', '/rooms/suites', '/rooms/large-suites', '/rooms/extra-large-suites', '/rooms/luxury-suite', '/rooms/apartments', '/rooms/no-kitchen-suite',
    ]
  }
}

