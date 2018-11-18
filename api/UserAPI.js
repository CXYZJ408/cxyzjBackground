import {Api} from './API'
import {Request, requestMethods} from './Request'

const User = '/v1/user'

export class UserApi extends Api {
    constructor(store) {
        super(store)
    }

    getUserSimple(send = true) {
        console.log('getUserSimple')
        let url = User + '/simple/own'
        super.pushRequest = new Request(requestMethods.GET, url, this.getUserSimple)
        return super.judgeSend(send)
    }
}
