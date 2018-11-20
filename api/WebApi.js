import { Api } from './API'
import { Request, requestMethods } from './Request'

const web = '/v1/admin/web'

export class WebApi extends Api {
  constructor (store) {
    super(store)
  }

  getWebData (send = true) {
    super.pushRequest = new Request(requestMethods.GET, web, this.getWebData)
    return super.judgeSend(send)
  }
}
