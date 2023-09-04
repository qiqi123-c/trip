<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabbarData">
      <div class="tab-bar-item" 
          :class="{active: index === currentIndex}" 
          @click="itemClick(index, item)">
        <img :src="getAssetURL(currentIndex === index? item.imageActive:item.image)">
        <span class="text">{{item.text}}</span>
      </div> 
    </template>
  </div>
</template>

<script setup>

  import {ref} from 'vue'
  import tabbarData from '@/assets/data/tabbar.js'
  import getAssetURL from '@/utils/load_assets.js'
  import {useRouter} from 'vue-router'

  const currentIndex = ref(0);
  const router = useRouter();
  const itemClick = (index, item)=>{
    currentIndex.value = index;
    router.push(item.path);
  }

</script>

<style lang="less" scoped>

  .tab-bar{
    display: flex;
    position: fixed;
    bottom:0;
    left: 0;
    right: 0;
    height: 50px;

    .tab-bar-item{
      flex:1;
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &.active{
        color: var(--primary-color);
      }

      img{
        width: 34px;
      }

      .text{
        font-size: 12px;
        margin-top: 2px;
      }
    }

  }

</style>
