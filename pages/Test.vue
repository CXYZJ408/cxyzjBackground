<template>
    <div class="square">
        <no-ssr>
            <v-chart :options="lines"></v-chart>
        </no-ssr>
    </div>
</template>

<script>

  export default {
    name: 'Test',
    data: function () {

      return {
        lines: {
          title: {
            left: 'center',
            top: '10',
            text: '堆叠区域图'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          xAxis: {
            splitLine: false,
            axisLabel: {
              textStyle: { color: 'blue',}
            },
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],

          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              type: 'bar',
              label: { show: true, color: 'white' },
              left: '100px',
              itemStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: '#22C3AA' // 100% 处的颜色
                  }],
                }
              },
              data: [150, 245, 77, 135, 354, 441, 54]
            }
          ]
        }
      }
    },
    methods: {}
  }
</script>

<style scoped>
    .square {
        height: 800px;
        margin-left: 100px;

    }
</style>
