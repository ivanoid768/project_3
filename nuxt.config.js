const pkg = require('./package')

module.exports = {
  mode: 'universal',

  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ea665c' },

  /*
  ** Global CSS
  */
  css: [
    '~assets/css/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/toast'

  ],
  auth: {
    redirect: {
      login: '/login',
      logout: '/logout',
      callback: '/login',
      home: '/dashboard'
    },
    token: {
      prefix: '_token.'
    },
    localStorage: {
      prefix: 'auth.'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/auth/login', method: 'post', propertyName: 'token' },
          logout: false,
          user: { url: '/api/auth/user', method: 'get', propertyName: 'user' }
        }
      }
    }
  },
  toast: {
    position: 'top-right'
  },
  /*
  ** Axios module configuration
  */
  axios: {
    proxy: true,
    baseURL: process.env.BASE_URL || 'http://localhost:3000'
    // See https://github.com/nuxt-community/axios-module#options
  },
  serverMiddleware: [
    { path: '/api/auth', handler: '~/api/app.js' },
    { path: '/api', handler: '~/api/index.js' },
  ],
  /*
  ** Build configuration
  */
  router: {
    middleware: ['auth']
  },
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
