<template xmlns:v-swiper="http://www.w3.org/1999/xhtml">
    <v-layout class="slide" wrap row justify-center>
        <transition name="fade">
            <v-flex md12 class="pt-4 pl-2" v-if="edit">
                <slideShow :slideList="slideList" @saveSlide="saveSlide" @quit="quit" @saveQuitSlide="saveQuitSlide"></slideShow>
            </v-flex>
        </transition>
        <v-flex md6 class="py-4 text-md-left pl-4">
            <div class="font-8 grey--text"><strong>轮播图预览:</strong></div>
        </v-flex>
        <v-flex md6 class="py-4 text-md-right pr-4">
            <transition name="fade">
                <v-btn small round color="blue" v-if="!edit" dark depressed @click="edit=true">
                    <v-icon size="16" class="mr-1">edit</v-icon>
                    编辑
                </v-btn>
            </transition>
        </v-flex>
        <v-flex md7 style="margin-bottom: 100px;max-width:80vh">
            <no-ssr>
                <div v-swiper:mySwiper="swiperOption"
                     style="width:100%!important;border-radius: 15px!important;min-height: 30vh;max-height:43vh">
                    <div class="swiper-wrapper" style="border-radius: 15px">
                        <div style="border-radius: 15px;min-height: 500px" class="swiper-slide"
                             v-for="(item,index) in slideList" :key="index">
                            <img :src="item.img_url" style="width: 100%">
                        </div>
                    </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-pagination swiper-pagination-bullets"></div>
                </div>
            </no-ssr>
        </v-flex>
    </v-layout>
</template>

<script>
  import slideShow from '~/components/Slide/index.vue'

  let $slideApi
  import { SlideApi } from '../../api/SlideApi'
  import Status from '../../utils/status'

  export default {
    name: 'slide',
    components: {
      slideShow
    },
    created () {
      $slideApi = new SlideApi(this.$store)
      this.getSlideList()
    },
    asyncData ({ store }) {
      $slideApi = new SlideApi(store)
      console.log('get-*-------------')
      /* TODO NUXT 的BUG 刷新时asyncData不会触发
            return $slideApi.getSlideItems().then(res => {
              console.log('get-*-------------', res)

              if (res.status === Status.SUCCESS) {
                // this.slideList = res.data.slide_list
                return { slideList: res.data.slide_list }
              }
            })*/
    },
    data: function () {
      return {
        slideList: [],
        edit: false,
        swiperOption: {
          loop: true,
          slidesPerView: 'auto',
          spaceBetween: 30,
          autoplay: true,
          effect: 'fade',
          fadeEffect: {
            crossFade: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          }
        },
      }
    },
    methods: {
      quit () {
        this.edit = false
      },
      saveSlide (newSlide) {
        this.slideList = newSlide
      },
      saveQuitSlide (newSlide) {
        this.slideList = newSlide
        this.edit = false
      },
      getSlideList () {
        $slideApi.getSlideItems().then(res => {
          if (res.status === Status.SUCCESS) {
            this.slideList = res.data.slide_list
          }
        }).catch(() => {
          this.$message.error('获取轮播图数据失败！')
        })
      }
    },
  }
</script>

<style scoped>
    .slide {
        height: 90vh;
        overflow: auto;
        overflow: -moz-scrollbars-none;
        -ms-overflow-style: none;
    }

    .slide::-webkit-scrollbar {
        width: 0 !important
    }

</style>
