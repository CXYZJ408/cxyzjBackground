<template>
    <div class="list">
        <slot></slot>
    </div>
</template>

<script>

  export default {
    name: 'index',
  }
</script>

<style scoped>
    .list {
        padding: 20px 0;
        max-width: 700px;
        margin-top: -8px;
        margin-left: 5px;
        background-color: #fff;
    }

    .list:after {
        clear: both;
        content: '';
        display: block;
    }
</style>
