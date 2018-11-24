<template>
    <v-layout  class="index">
        <v-flex  class="sidebar">
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
    components: {
      sidebar, navbar
    },
    data: function () {
      return {
        sidebarData: [
          { icon: 'home', name: '首页', link: '/', hasChild: false },
          { icon: 'iconfont icon-slide-show', name: '轮播图管理', link: '/slide', hasChild: false },
          {
            icon: 'iconfont icon-yonghu',
            name: '用户管理',
            link: '/user_manage',
            hasChild: true,
            children: [{ name: '管理员', link: '/admin' }, { name: '普通用户', link: '/user' }]
          },
        ]
      }
    }
  }
</script>

<style scoped>
    .index {
        background-color: #F0F2F5;
        overflow-y: hidden;
        overflow-x: hidden;
        height: 100vh;
    }
</style>
