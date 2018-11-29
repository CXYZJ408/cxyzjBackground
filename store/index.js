import { parseCookieByName } from '../utils'
import $status from '../utils/status'
import { UserApi } from '../api/UserAPI'

let _ = require('lodash')
export const state = () => ({
  isLogin: false,//登录状态
  token: '',
  user: {},//user信息
})

export const mutations = {
  login (state, data) {
    state.isLogin = true
    state.token = data.token
    state.user = data.user
  },
  loginAgain (state, data) {
    state.isLogin = true
    state.user = data.user
  },
  logout (state) {
    state.isLogin = false
    state.token = ''
    state.user = {}
  },
  setToken (state, token) {
    state.token = token
  }
}
export const actions = {
  async nuxtServerInit (store, { req }) {//在跳转其它的页面或是刷新页面的时候，nuxt会自动调用
    //读取req中的cookie
    let token = parseCookieByName(req.headers.cookie, 'token')//获取token
    store.commit('setToken', token)//将token重置
    if (_.isEmpty(store.state.token)) {//如果重置token之后，Token仍然为空，则表示还没有登陆
      console.log('the status without login')
    } else {
      //存在Token
      let $userApi = new UserApi(store)
      await $userApi.getUserSimple().then((res) => {
        console.log('getUserSimple', res)
        if (res && res.status === $status.SUCCESS) {
          //成功刷新用户信息
          store.commit('loginAgain', res.data)
        } else {
          //刷新失败
          console.log('token is expired , flush failed! ')
          store.commit('logout')
        }
      })
    }

  }
}
