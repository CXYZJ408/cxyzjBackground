export default async ({ store, route, redirect, error, params, req }) => {
//用户路由拦截
//   return 0
  console.log('登录状态', store.state.isLogin)
  if (!store.state.isLogin) {
    // 未登陆
    console.log(store.state.isLogin)
    if (route.fullPath !== '/login') {
      return redirect('/login')
    }
  } else {
    /*if (route.fullPath === '/login') {
      return redirect('/')
    }*/
    //todo 去掉注释
  }
}
