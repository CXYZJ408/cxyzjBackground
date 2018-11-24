import { Api } from './API'
import { Request, requestMethods } from './Request'

const auth = '/v1/admin/slide'

export class SlideApi extends Api {
  constructor (store) {
    super(store)
  }

  getSlideItems (send = true) {
    let url = auth + '/slide_list'
    super.pushRequest = new Request(requestMethods.GET, url, this.getSlideItems)
    return super.judgeSend(send)
  }
}
