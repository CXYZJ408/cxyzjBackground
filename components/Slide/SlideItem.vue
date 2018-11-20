<template>
    <div class="list-item">{{item}}</div>
</template>

<script>

  export default {
    name: 'item',
    props: ['item']

  }
</script>

<style scoped>
    .list-item {
        color: #fff;
        float: left;
        margin: 8px 20px 10px 0;
        padding: 5px 10px;
        width: 150px;
        background-color: #5F9EDF;
        text-align: center;
    }
</style>
