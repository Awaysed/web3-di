<template>
  <h2>助记词</h2>
</template>

<script setup>
import * as bip39 from 'bip39'

// const { Buffer } = require('buffer')
// 创建助记词
const mnemonic = bip39.generateMnemonic()
console.log(111, mnemonic)
</script>

<style scoped lang="less"></style>
