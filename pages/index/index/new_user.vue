<template>
    <v-flex md11 class="mb-5 ">
        <v-layout row wrap class="mt-4" justify-center>
            <v-flex md6 class="pr-4 pl-2">
                <newUserRealTime></newUserRealTime>
            </v-flex>
            <v-flex md3 class="px-2">
                <newUserPie></newUserPie>
            </v-flex>
            <v-flex md3 class="px-4">
                <newUserList></newUserList>
            </v-flex>
            <v-flex md10 class="mt-4 pt-3">
                <newUserMonth></newUserMonth>
            </v-flex>
        </v-layout>
    </v-flex>
</template>

<script>
  import newUserRealTime from '~/components/DataVisualization/User/newUserRealTime'
  import newUserPie from '~/components/DataVisualization/User/newUserPie'
  import newUserList from '~/components/DataVisualization/User/newUserList'
  import newUserMonth from '~/components/DataVisualization/User/newUserMonth'

  export default {
    name: 'new_user',
    components: {
      newUserRealTime, newUserPie, newUserList, newUserMonth
    },
  }
</script>

<style scoped>

</style>
