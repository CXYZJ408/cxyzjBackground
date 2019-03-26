<template>

    <v-layout row wrap justify-center mt-4>
        <v-flex md11>
            <v-card class="pa-3" flat color="#EAECEE">
                <v-layout row wrap>
                    <v-flex md3 class="px-3" v-for="(cardPanel,index) in cardPanelData" :key="index">
                        <cardPanel :cardPanel="cardPanel"></cardPanel>
                    </v-flex>
                </v-layout>
                <v-layout justify-end>
                    <v-flex md3 class="text-md-right pr-3 pt-3"><span class="font-8"><strong
                            style="color: #ABB2B9">今日网站动态</strong></span></v-flex>
                </v-layout>
            </v-card>
        </v-flex>
        <nuxt-child/>
    </v-layout>
</template>

<script>
  //todo 将网站访问的数据可视化
  //todo 可以可视化的数据项有：一周用户访问图，一周用户活跃量图，一周文章数总量图，一周新增文章图，一周讨论新增图，一周评论新增图
  import cardPanel from '~/components/CardPanel'

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
            this.cardPanelData[0].end = dailyData.new_users
            this.cardPanelData[1].end = dailyData.daily_users
            this.cardPanelData[2].end = dailyData.new_articles
            this.cardPanelData[3].end = dailyData.new_comments
          }
        })
        /*  setInterval(() => {
            _.forEach(this.cardPanelData, (item) => {
              item.start = item.end
            })
            $webApi.getWebData().then(res => {
              if (res.status === Status.SUCCESS) {
                let dailyData = res.data
                this.cardPanelData[0].end = dailyData.new_users
                this.cardPanelData[1].end = dailyData.daily_users
                this.cardPanelData[2].end = dailyData.new_articles
                this.cardPanelData[3].end = dailyData.new_comments
              }
            })
          }, 60 * 1000)*/
      }
    },
    created () {
      $webApi = new WebApi(this.$store)
      this.getWebDailyData()
    },
    components: {
      cardPanel
    },

    data: function () {
      return {
        cardPanelData: [
          {
            color: '#40C9C6',
            name: '新增用户',
            icon: 'iconfont icon-yonghu',
            to:"/new_user",
            start: 0,
            end: 0
          },
          {
            color: '#18ADED',
            name: '日活跃用户',
            icon: 'iconfont icon-attention',
            to:"/daily_user",
            start: 0,
            end: 0
          },
          {
            color: '#FF8000',
            name: '新增文章',
            icon: 'iconfont icon-article',
            to:"/new_article",
            start: 0,
            end: 0
          }, {
            color: '#A639A8',
            name: '新增评论',
            icon: 'iconfont icon-comment2',
            to:"/new_comment",
            start: 0,
            end: 0
          }
        ],//实时数据更新卡片
      }
    }
  }
</script>

<style scoped>

</style>
