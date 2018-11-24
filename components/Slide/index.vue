<template>
    <div>
        <v-dialog
                v-model="dialog"
                width="450"
                persistent
                hide-overlay
                lazy
        >
            <v-card flat>
                <v-card-title class="headline">修改轮播图链接</v-card-title>
                <v-card-text>
                    <v-text-field
                            label="链接"
                            prepend-icon="iconfont icon-link"
                            v-model="currentLink.link"
                    ></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="green darken-1"
                            flat="flat"
                            @click="changeLink"
                    >
                        确定
                    </v-btn>
                    <v-btn
                            color="green darken-1"
                            flat="flat"
                            @click="dialog = false"
                    >
                        取消
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-layout row wrap>
            <v-flex md6 class="pl-3 mb-2">
                <div class="font-8 grey--text"><strong>轮播图编辑:</strong></div>
            </v-flex>
            <v-flex md6 class="text-md-right mb-2 pr-3">
                <v-btn small round color="green" dark depressed @click="saveSlide">
                    <v-icon size="16" class="mr-1">save</v-icon>
                    保存
                </v-btn>
                <v-btn small round color="red" dark depressed @click="handleQuit">
                    <v-icon size="16" class="mr-1">iconfont icon-quit</v-icon>
                    退出
                </v-btn>
            </v-flex>
            <v-flex md12>
                <v-layout row wrap id="slideCard">
                    <v-flex md3 class=" px-3 mb-4" v-for="(item,index) in slideItems" :key="index">
                        <v-card flat class="item-card">
                            <transition name="fade">
                                <div class="triangle"><span
                                        class="triangle-inner slide-index">{{slideIndex.indexOf(item.id)+1}}</span>
                                </div>
                            </transition>
                            <v-img
                                    :src="item.img_url"
                                    aspect-ratio="1.618"
                                    class="grey lighten-2 slide-img"
                                    @click="startUpload(index)"
                            ></v-img>
                            <input @change="beforeUpload(index)" type="file" ref="inputFile" style="display:none">
                            <transition name="fade">
                                <div class="menu-bar">
                                    <v-icon class="menu-bar-icon-left icon-delete mt-2 ml-2"
                                            @click="deleteSlide(index)">
                                        iconfont icon-delete1
                                    </v-icon>
                                    <v-icon class="menu-bar-icon-right icon-move-slide mt-2 mr-2 ">
                                        reorder
                                    </v-icon>
                                    <v-icon @click="openChangeLinkDialog(index)"
                                            class=" menu-bar-icon-right mt-2 mr-3 ">
                                        iconfont icon-link
                                    </v-icon>
                                </div>
                            </transition>
                        </v-card>
                    </v-flex>
                    <v-flex md3 class=" px-3 mb-4 text-md-center exclude">
                        <transition name="fade">
                            <v-card flat class="item-card">
                                <v-img
                                        src="/img/new.png"
                                        aspect-ratio="1.618"
                                        class="grey lighten-2 slide-img"
                                        @click="addSlide"
                                ></v-img>
                            </v-card>
                        </transition>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>

</template>

<script>
  import { guid } from '../../utils'

  let $sortable = require('sortablejs')
  let sort
  let _ = require('lodash')
  const defaultLink = 0, defaultImg = 1, notDefault = 2
  export default {
    name: 'index',
    props: {
      slideList: {
        type: Array,
        default: [{
          id: 0,
          img_url: '',
          link: ''
        }]
      }
    },
    data: function () {
      return {
        hasEdit: false,
        slideIndex: [],//用于确定排序后的顺序
        accessType: ['jpeg', 'jpg', 'png'],//允许上传的文件类型
        dialog: false,
        slideItems: [],
        currentLink: { link: '', index: 0 }//dialog的link
      }
    },
    methods: {
      addSlide () {
        let beforeAdd = sort.toArray()
        console.log('beforeAdd', beforeAdd)
        if (this.slideItems.length < 5) {
          let item = {
            id: guid(),
            img_url: '/img/addSlide.png',
            link: ''
          }
          this.slideItems.push(item)
          this.slideIndex.push(item.id)
          this.hasEdit = true
        } else {
          this.$message.warning('最多只能添加5个轮播图哦！')
        }
        //如果在添加前交换了最后两个轮播图会导致莫名BUG，疑似此为sortablejs插件的BUG
        setTimeout(() => {//用于fix上述BUG，保证新加的元素永远在末尾
          let order = sort.toArray()
          for (let i = 0; i < order.length; i++) {
            if (beforeAdd.indexOf(order[i]) === -1) {
              //找到新增的那个了
              beforeAdd.splice(beforeAdd.length - 1, 0, order[i])
              break
            }
          }
          sort.sort(beforeAdd)
        }, 0)//延迟不要删除
      },
      handleQuit () {
        if (this.hasEdit) {
          this.$confirm('您所做的操作还未保存，是否保存?', '警告：', {
            confirmButtonText: '保存',
            cancelButtonText: '取消',
            type: 'warning',
            roundButton: true
          }).then(() => {
            this.saveQuitSlide()
          }).catch(() => {
            this.quit()
          })
        } else {
          this.quit()
        }
      },
      saveQuitSlide () {
        let newSlideItems = this.save()
        if (newSlideItems) {
          this.$emit('saveQuitSlide', newSlideItems)
          sort.destroy()//销毁
        }
      },
      isDefault (item) {
        if (_.isEmpty(item.link)) {
          return defaultLink
        }
        if (item.img_url === '/img/addSlide.png') {
          return defaultImg
        }
        return notDefault
      },
      saveSlide () {
        let newSlideItems = this.save()
        if (newSlideItems) {
          this.$emit('saveSlide', newSlideItems)
        }
      },
      check () {
        for (let i = 0; i < this.slideItems.length; i++) {
          switch (this.isDefault(this.slideItems[i])) {
            case defaultLink:
              this.$message.warning(`第${i + 1}个轮播图的链接未设置！`)
              return false
            case defaultImg:
              this.$message.warning(`第${i + 1}个轮播图的图片未设置！`)
              return false
          }
        }
        return true
      },
      save () {
        if (this.check()) {
          this.hasEdit = false
          let newSlideItems = []
          let map = {}
          for (let i = 0; i < this.slideItems.length; i++) {
            map[this.slideItems[i].id] = i
          }
          _.forEach(this.slideIndex, (item) => {
            newSlideItems.push(this.slideItems[map[item]])
          })
          this.$message.success('保存成功！')
          return newSlideItems
        } else {
          return false
        }
      },
      quit () {
        this.$emit('quit')
        sort.destroy()//销毁
      },
      setSlideItems () {
        this.slideItems = []
        this.slideIndex = []
        _.forEach(this.slideList, (item) => {//复制slide的id
          this.slideItems.push(item)//复制元素，因为不可以直接操作父元素
          this.slideIndex.push(item.id)
        })
      },
      openChangeLinkDialog (index) {//打开修改链接的对话框
        this.dialog = true
        this.currentLink.link = this.slideItems[index].link
        this.currentLink.index = index
      },
      changeLink () {
        this.dialog = false
        let index = this.currentLink.index
        this.slideItems[index].link = this.currentLink.link
        this.$message.success('超链接修改成功！')
        this.hasEdit = true
      },
      deleteSlide (index) {
        this.$confirm('此操作将删除该轮播图, 是否继续?', '警告：', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          roundButton: true
        }).then(() => {
          let indexOf = this.slideIndex.indexOf(this.slideItems[index].id)
          this.slideItems.splice(index, 1)
          this.slideIndex.splice(indexOf, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.hasEdit = true
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        })
      },
      startUpload (index) {
        let inputs = this.$refs.inputFile
        inputs[index].click()
      },
      beforeUpload (index) {
        let inputs = this.$refs.inputFile
        let file = inputs[index].files[0]//获取上传的文件
        let fileNames = file.name.split('.')//读取文件名
        let type = fileNames[fileNames.length - 1]//获取文件类型
        if (this.accessType.indexOf(type) === -1) {//判断是否是允许上传的类型
          this.$message.warning('上传的文件类型只能是jpg，jpeg和png格式')
          return false
        }
        if (file.size > 1024 * 1024 * 2) {//判断文件大小
          this.$message.warning('上传的文件请不要超过2MB')
          return false
        }
        this.upload(file, index)//上传
      },
      upload (file, index) {
        if (!file || !window.FileReader) return false
        let reader = new FileReader()
        // 将图片将转成 base64 格式
        reader.readAsDataURL(file)
        // 读取成功后的回调
        reader.onloadend = (option) => {
          //读取图片
          this.slideItems[index].img_url = option.target.result
          this.$message.success('图片上传成功！')
        }
        this.hasEdit = true
      },
      setSort () {
        let slideCard = document.getElementById('slideCard')//获取元素
        sort = $sortable.create(slideCard, {
          animation: 300,//动画时间
          handle: '.icon-move-slide',//选择用于拖拽的元素
          onEnd: (evt) => {//拖拽排序结束后的回调
            let from = evt.oldIndex
            let to = evt.newIndex
            console.log(from, to)
            let el = this.slideIndex[from]
            this.slideIndex.splice(from, 1)
            this.slideIndex.splice(to, 0, el)
          },
          onMove: (evt) => {
            return evt.related.className.indexOf('exclude') === -1
          }
        })
      },
    },
    mounted () {
      this.setSort()
    },
    created () {
      this.setSlideItems()
    }
  }
</script>

<style scoped lang="scss">
    .item-card {
        position: relative;
        .slide-img {
            cursor: pointer;
        }
    }

    .triangle {
        position: absolute;
        border: 25px solid rgba(16, 16, 16, 0.618);
        height: 0;
        width: 0;
        z-index: 100;
        border-right-color: transparent;
        border-bottom-color: transparent;
    }

    .triangle-inner {
        position: absolute;
        top: -20px;
        left: -18px;
        color: white;
    }

    .menu-bar {
        position: absolute;
        bottom: 0;
        height: 40px;
        width: 100%;
        background-color: rgba(16, 16, 16, 0.7);
        z-index: 100;
        .menu-bar-icon-left {
            float: left;
        }
        .menu-bar-icon-right {
            float: right;
        }
        .icon-move-slide {
            cursor: move;
            cursor: -webkit-grabbing;
        }
        i {
            color: white;
        }
        .icon-delete:hover {
            color: #E74C3C;
        }
        .icon-link:hover {
            color: #3498DB;
        }
        .icon-move-slide:hover {
            color: #58D68D;
        }
    }

</style>
