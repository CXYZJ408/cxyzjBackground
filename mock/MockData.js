import LoginApi from './Login'
import UserApi from './User'
import IndexApi from './index'
import Slide from './Slide'

let Mock = require('mockjs')
Mock.mock('/v1/admin/auth/login', 'post', LoginApi.login)
Mock.mock('/v1/user/simple/own', 'get', UserApi.getUserSimple)
Mock.mock('/v1/admin/web', 'get', IndexApi.webData)
Mock.mock('/v1/admin/slide/slide_list', Slide.slideItems)
