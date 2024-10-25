<template>
  <Button>页面</Button>
  <van-button type="primary" size="large">大号按钮</van-button>
  <van-button type="primary">主要按钮</van-button>
</template>
<script setup lang="ts">
import Web3 from 'web3'
var web3 = new Web3(Web3.givenProvider || 'ws://localhost:5173')
console.log(111, web3)

</script>

<style scoped>
/* import 'vant/lib/index.css'; */
</style>
