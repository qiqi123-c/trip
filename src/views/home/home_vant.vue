<template>
  <div class="HomeView">
    <h2>home</h2>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-rate v-model="rateValue" />
    <button @click="rateIncerment">评分+1</button>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import {ref} from 'vue'

const rateValue = ref(0)

function rateIncerment(){
  rateValue.value++;
}

</script>

<style lang="less" scoped>

</style>
