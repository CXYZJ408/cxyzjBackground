import {loginUser, noUser, passwordWrong} from "./Template";
import {param2Obj} from "../utils";


export default {
    login: options => {
        console.log('login', options)
        const {userName, password} = param2Obj(options.body)
        if (userName !== 'admin') {
            return noUser
        }
        if (password !== 'admin') {
            return passwordWrong
        }
        if (userName === 'admin' && password === 'admin') {
            return loginUser
        }
    }
}
