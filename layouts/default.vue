<template>
    <v-app>
        <nuxt/>
    </v-app>
</template>
<script>
  export default {
    watch: {
      '$route' (to, from) {
        if (from.name === 'login' && to.name === 'index') {
          this.$notify({
            title: '欢迎登录',
            message: `${this.$store.state.user.login_name}，欢迎您登录程序员之家后台管理系统！`,
            type: 'success'
          });
        }
      }
    },
  }
</script>
<style scoped>

</style>


