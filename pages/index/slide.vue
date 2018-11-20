<template>
    <v-layout>
        <v-flex md12 class="pt-3">
            <ul id="bar" class="block__list block__list_tags">
                <li v-for="i in 10">{{i}}</li>
            </ul>
        </v-flex>
    </v-layout>
</template>

<script>

  let $sortable = require('sortablejs')
  export default {
    name: 'slide',
    data () {
      return {
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8'],
        drag: true
      }
    },
    methods: {
      sort () {
        let bar = document.getElementById('bar')
        $sortable.create(bar, {
          animation: 300,
        })
      }
    },
    mounted () {
      this.sort()
    }
  }
</script>

<style scoped>
    .block__list_tags li {
        color: #fff;
        float: left;
        margin: 8px 20px 10px 0;
        padding: 5px 10px;
        width: 150px;
        height: 100px;
        background-color: #5F9EDF;
        text-align: center;
    }

    .block__list_tags {
        padding-left: 30px;
    }

    .block__list {
        padding: 20px 0;
        max-width: 700px;
        margin-top: -8px;
        margin-left: 5px;
        background-color: #fff;
    }

    .block__list_tags:after {
        clear: both;
        content: '';
        display: block;
    }
</style>
