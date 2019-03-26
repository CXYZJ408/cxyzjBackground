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
            title: '登录成功！',
            message: `你好${this.$store.state.user.login_name}，欢迎登录程序员之家！`,
            type: 'success'
          })
        }
      }
    },
  }
</script>
<style scoped>

</style>


