<template>
  <h2>asdasd</h2>
</template>

<script setup>
import Web3 from 'web3'
var web3 = new Web3(
  Web3.givenProvider || 'wss://sepolia.infura.io/ws/v3/9592f660765f4dd19d74b5248ba9b66c'
)
const account = web3.eth.accounts.create('123')
console.log(account)
</script>

<style scoped lang="less"></style>
