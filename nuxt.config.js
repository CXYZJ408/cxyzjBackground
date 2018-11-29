module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '程序员之家后台管理',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'the back-stage management for cxyzj' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'http://at.alicdn.com/t/font_795495_kkfaxes9jhr.css' },//阿里icon设置

    ]
  },
  router: {
    middleware: ['Auth'],
  },
  ssr: false,
  plugins: [
    { src: '~/plugins/vuetify.js' },
    { src: '~/plugins/element.js' },
    { src: '~/plugins/swiper.js', ssr: false },
    { src: '~/mock/MockData.js' }
  ],
  css: ['~/assets/style/common.css',//全局css配置文件
    '~/assets/style/app.styl',
    '~/assets/style/transition.css',
    'swiper/dist/css/swiper.css',
    'element-ui/lib/theme-chalk/index.css',],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    // extend(config, ctx) {
    //     // Run ESLint on save
    //     if (ctx.isDev && ctx.isClient) {
    //         config.module.rules.push({
    //             enforce: 'pre',
    //             test: /\.(js|vue)$/,
    //             loader: 'eslint-loader',
    //             exclude: /(node_modules)/
    //         })
    //     }
    // }
  }
}
