export default async function ({store, route, redirect, error, params, req}) {
//用户路由拦截
    console.log(store.state.isLogin)
    if (!store.state.isLogin) {
        //未登陆了
        return redirect('/login')
    } else {
        if (route.fullPath === '/login') {
            return redirect('/')
        }
    }

}
