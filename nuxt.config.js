module.exports = {
  /*
  ** Headers of the page
  */
  server: {
    port: 3001, // default: 3000
  },
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
      { rel: 'stylesheet', href: 'http://at.alicdn.com/t/font_795495_je2q78ru5dc.css' },//阿里icon设置
    ]
  },
  router: {
    middleware: ['Auth'],
  },
  ssr: false,
  plugins: [
    { src: '~/plugins/vuetify.js' },//vuetify框架
    { src: '~/plugins/element.js' },//element框架
    { src: '~/plugins/swiper.js', ssr: false },//轮播图插件
    { src: '~/mock/MockData.js' },//mock数据服务器
    { src: '~/plugins/echarts.js', ssr: false },//可视化数据插件
    { src: '~/plugins/animeJS.js' },//js动画库
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
    transpile: ['vue-echarts', 'resize-detector']
  }
}

