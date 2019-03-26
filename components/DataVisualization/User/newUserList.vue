<template>
    <v-card flat hover class="card">
        <v-toolbar color="#4EA1FF" flat class="text-md-center">
            <div class="white--text list-title">新增用户</div>
        </v-toolbar>
        <v-list three-line>
            <transition-group name="fade">
                <div v-for="(user) in userList" :key="user.name">
                    <v-list-tile>
                        <v-list-tile-avatar :size="45">
                            <img src="/img/711a3cf9-4d2a-4880-a9e8-b8bf80604ef5.jpeg" alt="">
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title class="nickname">{{user.name}}
                                <v-icon small class="ml-1" color="blue">iconfont icon-nan</v-icon>
                            </v-list-tile-title>
                            <v-list-tile-sub-title class="group">所属用户组：{{user.group}}</v-list-tile-sub-title>
                            <div class="register-msg">注册于：2019/3/22 10:12</div>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider class="divider"></v-divider>
                </div>
            </transition-group>
        </v-list>
    </v-card>
</template>

<script>
  export default {
    name: 'newUserList',
    methods: {
      addUser () {
        if (this.userList.length >= 3) {
          this.userList.pop()
        }
        this.userList.unshift({ name: `Yaser${this.index++}`, group: '普通用户' })
      }
    },
    data: function () {
      return {
        index: 0,
        userList: []
      }
    }
  }
</script>

<style scoped>
    .card {
        border-radius: 10px;
        width: 100%;
        height: 334px;
        overflow: hidden;
    }

    .list-title {
        font-family: "楷体", serif;
        font-size: 28px;
        width: 100%;
    }

    .register-msg {
        width: 100%;
        text-align: right;
        font-family: 黑体, serif;
        font-size: 13px;
        padding-top: 3px;
        color: #A7AEB3;
    }

    .nickname {
        font-family: 黑体, serif;
        font-size: 18px;
        color: #17202A;
    }

    .group {
        font-family: 黑体, serif;
        font-size: 14px;
        color: #5D6D7E !important;
    }

    .divider {
        margin-left: 5%;
        width: 90%;
        border-color: #EBF0F2 !important;
        margin-top: -5px;
    }
</style>
