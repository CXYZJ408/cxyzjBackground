<template>
    <v-layout class="index">
        <v-flex class="sidebar">
            <sidebar :sidebarData="sidebarData"></sidebar>
        </v-flex>
        <v-flex md11>
            <v-layout>
                <v-flex>
                    <navbar></navbar>
                </v-flex>
            </v-layout>
            <v-layout>
                <nuxt-child/>
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
  import sidebar from '~/components/Layout/Sidebar'
  import navbar from '~/components/Layout/Navbar'

  export default {
    name: 'index',
    data: function () {
      return {
        sidebarData: [
          { icon: 'home', name: '首页', link: '/', hasChild: false },
          { icon: 'iconfont icon-slide-show', name: '轮播图管理', link: '/slide', hasChild: false },
          {
            icon: 'iconfont icon-user-manage',
            name: '用户管理',
            link: '/user_manage',
            hasChild: true,
            active:false,
            children: [{ name: '管理员', link: '/admin' }, { name: '普通用户', link: '/user' }]
          },
          {
            icon: 'iconfont icon-authority',
            name: '权限系统',
            link: '/authority',
            hasChild: true,
            active:false,
            children: [{ name: '权限管理', link: '/authority_manage' }, { name: '角色管理', link: '/role_manage' }]
          },
          {
            icon: 'iconfont icon-department',
            name: '部门管理',
            hasChild: false,
            link: '/department_manage'
          },
          {
            icon: 'iconfont icon-article-manage',
            name: '文章管理',
            hasChild: false,
            link: '/article_manage'
          }
        ]
      }
    },
    components: {
      sidebar, navbar
    }
  }
</script>

<style scoped>
    .index {
        background-color: #F0F2F5;
        overflow-x: hidden;
    }
</style>
