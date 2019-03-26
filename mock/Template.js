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
      role_id: Random.id(),
      head_url: '/img/711a3cf9-4d2a-4880-a9e8-b8bf80604ef5.jpeg',
      login_name: Random.name(),
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


export const slideItem = {
  status: 200,
  data: {
    slide_list: [
      {
        id: Random.id(),
        img_url: '/img/1.jpg',
        link: Random.url()
      },
      {
        id: Random.id(),
        img_url: '/img/2.jpg',
        link: Random.url()
      }
    ]
  }
}
