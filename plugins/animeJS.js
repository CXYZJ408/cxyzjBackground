import Vue from 'vue'
import animejs from 'animejs'

const $VueAnime = {
  install (Vue, options) {
    Vue.prototype.$animeJS = animejs
  }
}
Vue.use($VueAnime)

