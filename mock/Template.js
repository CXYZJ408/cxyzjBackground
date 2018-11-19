import Mock from 'mockjs'
import Status from '../utils/status'

let Random = Mock.Random
export const fail = {
  status: Status.FAILURE
}
export const passwordWrong = {
  status: Status.WRONG_PASSWORD
}
export const noUser = {
  status: Status.NONE_USER
}
export const loginUser = {
  status: 200,
  data: {
    user: {
      role: 'admin',
      head_url: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      nickname: Random.name(),
      user_id: Random.id(),
    },
    token: 'admin'
  }
}

export const user = {
  status: 200,
  data: {
    user: {
      role: 'admin',
      head_url: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      nickname: Random.name(),
      user_id: Random.id(),
    }
  }
}

