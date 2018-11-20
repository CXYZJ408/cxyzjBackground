<template>
    <div class="card-panel" @mouseenter="mouseHover(true)" @mouseleave="mouseHover(false)">
        <div class="card-panel-icon-wrapper" :style="{background:backColor}">
            <v-icon class="card-panel-icon" :color="hover?'white':cardPanel.color">
                {{cardPanel.icon}}
            </v-icon>
        </div>
        <div class="card-panel-description">
            <div class="card-panel-text">{{cardPanel.name}}</div>
            <count-to :start-val="0" :end-val="cardPanel.num" :duration="2600" class="card-panel-num"/>
        </div>
    </div>
</template>

<script>
  import countTo from 'vue-count-to'

  export default {
    name: 'index',
    props: {
      cardPanel: {
        type: Object
      }
    },
    components: {
      countTo
    },
    data: function () {
      return {
        backColor: 'white',
        hover: false
      }
    },
    methods: {
      mouseHover (hover) {
        if (hover) {
          this.hover = true
          this.backColor = this.cardPanel.color
        } else {
          this.hover = false
          this.backColor = 'white'
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .card-panel {
        height: 108px;
        cursor: pointer;
        font-size: 12px;
        position: relative;
        overflow: hidden;
        color: #666;
        background: #fff;
        box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
        border-color: rgba(0, 0, 0, .05);
        .card-panel-icon-wrapper {
            transition: all .38s ease-out;
        }
    }

    .card-panel-icon-wrapper {
        float: left;
        margin: 14px 0 0 14px;
        padding: 16px;
        transition: all 0.38s ease-out;
        border-radius: 6px;
    }

    .card-panel-icon {
        float: left;
        font-size: 48px;
    }

    .card-panel-description {
        float: right;
        font-weight: bold;
        margin: 26px 26px 26px 0;
        .card-panel-text {
            line-height: 18px;
            color: rgba(0, 0, 0, 0.45);
            font-size: 16px;
            margin-bottom: 12px;
        }
        .card-panel-num {
            font-size: 20px;
        }
    }
</style>
