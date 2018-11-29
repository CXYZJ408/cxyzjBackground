<template>
    <v-toolbar flat color="white" card id="navbar">
        <img src="/logo-small.png" class="nav-item">
        <v-toolbar-title class="grey--text text--darken-2 font-4"><strong>程序员之家后台管理系统</strong></v-toolbar-title>
        <v-breadcrumbs :items="items" class="clear-padding " slot="extension">
            <v-icon slot="divider">chevron_right</v-icon>
        </v-breadcrumbs>
        <v-spacer></v-spacer>
        <v-avatar class="nav-item">
            <img :src="$store.state.user.head_url" alt="">
        </v-avatar>
        <span class="capital mx-2"><strong>{{$store.state.user.login_name}}</strong></span>
        <v-tooltip bottom>
            <v-btn icon depressed @click="quit" slot="activator">
                <v-icon>iconfont icon-quit</v-icon>
            </v-btn>
            <span>退出</span>
        </v-tooltip>
    </v-toolbar>
</template>

<script>
  export default {
    name: 'index',
    watch: {
      '$route' (to) {
        this.routeTO(to)
      }
    },
    data: function () {
      return {
        breadcrumbs: {
          '/': [
            {
              text: '首页',
              disabled: true,
              href: '/'
            }
          ],
          '/slide': [
            {
              text: '轮播图管理',
              disabled: true,
              href: '/slide'
            }
          ],
          '/user_manage/admin': [
            {
              text: '用户管理',
              disabled: false
            },
            {
              text: '管理员',
              disabled: true,
              href: '/user_manage/admin'
            }
          ],
          '/user_manage/user': [
            {
              text: '用户管理',
              disabled: false
            },
            {
              text: '普通用户',
              disabled: true,
              href: '/user_manage/user'
            }
          ],
          '/authority/authority_manage': [
            {
              text: '权限系统',
              disabled: false
            },
            {
              text: '权限管理',
              disabled: true,
              href: '/authority/authority_manage'
            }
          ],
          '/authority/role_manage': [
            {
              text: '权限系统',
              disabled: false
            },
            {
              text: '角色管理',
              disabled: true,
              href: '/authority/role_manage'
            }
          ],
          '/department_manage': [
            {
              text: '部门管理',
              disabled: true,
              href: '/department_manage'
            }
          ],
          '/article_manage': [
            {
              text: '文章管理',
              disabled: true,
              href: '/article_manage'
            }
          ]
        },
        items: [
          {
            text: '首页',
            disabled: true,
            href: '/'
          }
        ]
      }
    },
    methods: {
      routeTO (currentRoute) {
        this.items = this.breadcrumbs[currentRoute.path]
      },
      quit () {
        this.$store.commit('logout')
        this.$router.push({ path: `/login` })

      }
    },
    mounted () {
      this.routeTO(this.$route)
    }
  }
</script>

<style>
    #navbar .v-toolbar__content {
        height: 7.5vh !important;
    }

    #navbar .v-toolbar__content, .v-toolbar__extension {
        border-bottom: 1px solid #d8dce5;
    }

    #navbar .v-toolbar__extension {
        height: 4vh !important;
        font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei, sans-serif;
    }

    #navbar a {
        color: #3498DB;
    }

    #navbar .theme--light.v-breadcrumbs .v-breadcrumbs__divider, .theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled {
        color: grey !important;
        pointer-events: none;
    }

</style>
<style scoped>
    .nav-item {
        height: 5vh;
    }
</style>
