<template>
  <div class="HomeView">
    <HomeNavBar></HomeNavBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp">
    </div>

    <div class="location">
      <div class="city">广州</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png">
      </div>
    </div>
  </div>
</template>

<script setup>

  import HomeNavBar from '../home/cpns/home-nav-bar.vue'

</script>

<style lang="less" scoped>
.banner{
  img{
    width: 100%;
  }
}

.location{
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city{
    flex: 1;
  }

  .position{
    width: 74px;
    display: flex;
    align-items: center;

    .text{
      position: relative;
      font-size: 12px;
      top: 2px;
    }

    img{
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }

  }
}

</style>
