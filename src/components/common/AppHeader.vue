<template>
  <div class="header-container">
    <div class="header">
      Header
    </div>
    <AppHeaderNav />
  </div>
</template>

<script>
import AppHeaderNav from '@/components/common/AppHeaderNav.vue';
export default {
  components:{
    AppHeaderNav
  }
}
</script>

<style lang="scss" scoped>
.header-container{
    position: fixed;
    .header{
      background: green;
      width: 480px;
      height: 70px;
      color: white;
      font-size: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
}
</style>