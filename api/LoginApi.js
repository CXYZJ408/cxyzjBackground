import { Api } from './API'
import { Request, requestMethods } from './Request'

const auth = '/v1/admin/auth'

export class LoginApi extends Api {
  constructor (store) {
    super(store)
  }

  login (userName, password, send = true) {
    let url = auth + '/login'
    let params = {
      login_name: userName,
      password: password
    }
    super.pushRequest = new Request(requestMethods.POST, url, this.login, params)
    return super.judgeSend(send)
  }
}


