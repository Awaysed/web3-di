<template>
  <h2>余额：{{ mount }}</h2>
</template>

<script setup>
import { ref } from 'vue'
import Web3 from 'web3'
var web3 = new Web3(
  Web3.givenProvider || 'wss://sepolia.infura.io/ws/v3/9592f660765f4dd19d74b5248ba9b66c'
)
const account = web3.eth.accounts.create('123')
// console.log(account)
const mount = ref(null)
web3.eth.getBalance(account.address).then((res) => {
  mount.value = res
})
const num1 = web3.utils.toWei('0.3', 'tether')
console.log(1111, num1)
</script>

<style scoped lang="less"></style>
