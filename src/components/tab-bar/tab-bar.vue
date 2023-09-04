<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData">
        <van-tabbar-item :to="item.path">
          <span>{{item.text}}</span>
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetURL(item.image)">
            <img v-else :src="getAssetURL(item.imageActive)">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>    
  </div>
</template>

<script setup>

  import {ref} from 'vue'
  import tabbarData from '@/assets/data/tabbar.js'
  import getAssetURL from '@/utils/load_assets.js'
  import {useRouter} from 'vue-router'

  const currentIndex = ref(0);

</script>

<!-- 直接修改类的属性 -->
<!-- :deep(.van-tabbar-item__icon){
  font-size: 50px;
} -->

<!-- 常见的修改方式：
1. 插槽中自己定义的，直接修改
2. 全局定义变量。覆盖值
3. 局部定义变量，覆盖值
4. 直接找到对应的选择器进行修改。要加上deep -->

<style lang="less" scoped>

  .tab-bar{
    
    --van-tabbar-item-font-size: 10px !important;

    img{
      height: 26px;
    }
  }

</style>
