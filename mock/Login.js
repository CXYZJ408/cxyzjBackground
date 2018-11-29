import { loginUser, noUser, passwordWrong } from './Template'
import { param2Obj } from '../utils'

export default {
  login: options => {
    console.log('login', options)
    const { login_name, password } = param2Obj(options.body)
    console.log(login_name,password)
    if (login_name !== 'admin') {
      return noUser
    }
    if (password !== 'admin') {
      return passwordWrong
    }
    if (login_name === 'admin' && password === 'admin') {
      return loginUser
    }
  }
}
