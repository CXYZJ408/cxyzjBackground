<template>
    <v-layout wrap row justify-center class="login">
        <v-flex md5 sm8 xs12 lg4 xl3 class="text-md-center">
            <span><strong class="font-10 login-title">程序员之家后台管理系统登录</strong></span>
            <v-form v-model="valid" ref="form" lazy-validation>
                <v-text-field
                        autofocus
                        class="pt-4 px-3"
                        prepend-icon="account_circle"
                        v-model="userName"
                        label="用户名"
                        required
                        dark
                        color="light-blue"
                        @keyup.enter="login"
                ></v-text-field>
                <v-text-field
                        dark
                        class="pt-4 px-3"
                        :type="show?'text':'password'"
                        :append-icon="show?'visibility_off':'visibility'"
                        prepend-icon="lock"
                        v-model="password"
                        :rules="passwordRules"
                        label="密码"
                        @click:append="show=!show"
                        required
                        color="light-blue"
                        @keyup.enter="login"
                ></v-text-field>

            </v-form>
            <v-layout justify-center>
                <v-flex md12 class="py-4 px-3">
                    <v-btn block round large class="display-1 white--text" color="blue "
                           @click="login">登录
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
</template>
<script>
  import { LoginApi } from '../api/LoginApi'
  import Status from '../utils/status'
  import axios from 'axios'
  import { UserApi } from '../api/UserAPI'

  let $cookie
  let $loginApi
  export default {
    head: {
      title: '程序员之家后台管理系统 - 登录'
    },
    components: {

    },
    data: function () {
      return {
        show: false,
        valid: false,
        userName: '',
        password: '',
        passwordRules:
          [v => !!v || '密码不可为空']
      }
    },
    methods: {
      login () {
        $loginApi.login(this.userName, this.password).then(res => {
          this.handleLoginResult(res)
        }).catch(() => {
          this.$message.error('出错啦！！')
        })
      },
      handleLoginResult (res) {
        let status = res.status

        if (status === Status.WRONG_PASSWORD) {
          this.$message.error('密码错误！！')
        } else if (status === Status.NONE_USER) {
          this.$message.error('当前用户不存在！！')
        } else if (status === Status.SUCCESS) {
          this.$store.commit('login', res.data)
          $cookie.set('token', res.data.token)
          this.$router.push({ path: `/` })
        }
      }
    },
    mounted () {
      //初始化
      $cookie = require('js-cookie')
      $loginApi = new LoginApi(this.$store)
    }
  }
</script>
<style scoped lang="scss">
    a {
        text-decoration: none;
    }

    .icon {
        height: 30px;
    }

    .login {
        padding-top: 14em;
        background: #2D3A4B;
    }

    .login-title {
        color: #EEEEEE;
    }
</style>

