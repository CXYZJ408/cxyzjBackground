import Mock from 'mockjs'

export default {
  webData: () => {
    return {
      status: 200,
      data: {
        new_users: Mock.Random.natural(100, 8000),
        daily_users: Mock.Random.natural(100, 8000),
        new_articles: Mock.Random.natural(100, 8000),
        new_comments: Mock.Random.natural(100, 8000)
      }
    }
  }
}
