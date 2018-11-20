import LoginApi from './Login'
import UserApi from './User'
import IndexApi from './index'

let Mock = require('mockjs')
Mock.mock('/v1/admin/auth/login', 'post', LoginApi.login)
Mock.mock('/v1/user/simple/own', 'get', UserApi.getUserSimple)
Mock.mock('/v1/admin/web', 'get', IndexApi.webData)

