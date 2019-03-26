let data = []//传给echarts的数据
let nowTime = new Date()//当前时间
let today = new Date(nowTime.getFullYear(), nowTime.getMonth(), nowTime.getDate())//获取当前日期，作为零点时间
const stepTime = 60 * 1000//间隔时间：五分钟
data = setDate(getDataTillNow())//获取从当天零点到现在的数据集
console.log(data[data.length - 1])

function getRealTimeData () {//向后台请求5分钟内的实时数据
  return [Math.floor(Math.random() * 100)]
}

function getDataTillNow () {//向后台请求从当天零时到此刻的所有数据

  let times = Math.floor((nowTime - today) / 1000 / 60)
  let resultData = []
  for (let i = 0; i < times; i++) {
    resultData.push(Math.floor(Math.random() * 100))
  }
  return resultData
}

function getTime () {
  today = new Date(+today + stepTime)//日期
  let nowDate = `${today.getFullYear()}/${(today.getMonth() + 1)}/${today.getDate()} ${today.getHours() >= 10 ? today.getHours() : '0' + today.getHours()}:${today.getMinutes() >= 10 ? today.getMinutes() : '0' + today.getMinutes()}:${today.getSeconds() >= 10 ? today.getSeconds() : '0' + today.getSeconds()}`
  return [today, nowDate]
}

function setDate (realTimeDataSet) {//设置数据集的时间，以5分钟为一个单位，并将数据格式化后返回
  let resultData = [] //返回的数据
  for (let i = 0; i < realTimeDataSet.length; i++) {//取出每一个数据，并将数据的日期添加上
    let time = getTime()
    resultData.push({
      name: time[0].toString(),
      value: [
        time[1],
        realTimeDataSet[i]
      ]
    })
  }
  return resultData
}

option = {
  title: {
    text: '动态数据 + 时间坐标轴'
  },
  tooltip: {
    trigger: 'axis',
    formatter: function (params) {
      params = params[0]
      let date = new Date(params.name)
      return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate() + ' ' + (date.getHours() >= 10 ? date.getHours() : '0' + date.getHours()) + ':' + (date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes()) + ' : ' + params.value[1]
    },
    axisPointer: {
      animation: false
    }
  },
  xAxis: {
    type: 'time',
    splitLine: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '100%'],
    splitLine: {
      show: false
    }
  },
  series: [{
    name: '模拟数据',
    type: 'line',
    itemStyle: {
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
          offset: 0, color: '#40C9C6' // 100% 处的颜色
        }],
      }
    },
    areaStyle: {
      color: '#40C9C6'
    },
    showSymbol: false,
    hoverAnimation: true,
    data: data
  }]
}

setInterval(function () {
  console.log(data[0])
  data.shift()
  data.push(setDate(getRealTimeData(), today)[0])
  /* myChart.setOption({
     series: [{
       data: data
     }]
   });*/
}, 1000)
