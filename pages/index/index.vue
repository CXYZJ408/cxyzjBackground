<template>
    <v-layout row wrap justify-center mt-4>
        <v-flex md11>
            <v-card class="pa-3" flat color="#EAECEE">
                <v-layout row wrap>
                    <v-flex md3 class="px-3" v-for="(cardPanel,index) in cardPanelData" :key="index">
                        <cardpanel :cardPanel="cardPanel"></cardpanel>
                    </v-flex>
                </v-layout>
                <v-layout justify-end>
                    <v-flex md3 class="text-md-right pr-3 pt-3"><span class="font-8"><strong
                            style="color: #ABB2B9">网站动态</strong></span></v-flex>
                </v-layout>
            </v-card>
        </v-flex>
        <v-flex md12 class="text-md-center mt-5">
            <div class="font-10 grey--text mt-5"><strong>欢迎访问程序员之家后台管理系统</strong></div>
            <!--TODO 后期换成数据的可视化-->
        </v-flex>
    </v-layout>
</template>

<script>
  //todo 将网站访问的数据可视化
  //todo 可以可视化的数据项有：一周用户访问图，一周用户活跃量图，一周文章数总量图，一周新增文章图，一周讨论新增图，一周评论新增图
  import cardpanel from '~/components/CardPanel'
  import { WebApi } from '../../api/WebApi'
  import Status from '../../utils/status'

  let _ = require('lodash')
  let $webApi

  export default {
    name: 'index',

    methods: {
      getWebDailyData () {
        $webApi.getWebData().then(res => {
          if (res.status === Status.SUCCESS) {
            let dailyData = res.data
            this.cardPanelData[0].num = dailyData.new_users
            this.cardPanelData[1].num = dailyData.daily_users
            this.cardPanelData[2].num = dailyData.new_articles
            this.cardPanelData[3].num = dailyData.new_comments
          }
        })
      }
    },
    created () {
      $webApi = new WebApi(this.$store)
      this.getWebDailyData()
    },
    components: {
      cardpanel
    },
    data: function () {
      return {
        cardPanelData: [
          {
            color: '#40C9C6',
            name: '新增用户',
            icon: 'iconfont icon-yonghu',
            num: 0
          },
          {
            color: '#18ADED',
            name: '日活跃用户',
            icon: 'iconfont icon-attention',
            num: 0
          },
          {
            color: '#FF8000',
            name: '新增文章',
            icon: 'iconfont icon-article',
            num: 0
          }, {
            color: '#A639A8',
            name: '新增评论',
            icon: 'iconfont icon-comment2',
            num: 0
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
