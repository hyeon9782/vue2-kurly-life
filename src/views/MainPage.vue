<template>
    <div class="main-container">
        <AppSwiper />
    </div>
</template>

<script>
import AppSwiper from '@/components/common/AppSwiper.vue';
export default {
  components:{
    AppSwiper
  }
}
</script>

<style lang="scss" scoped>
.main-container{
    width: 480px;
    margin-top: 102px;
    height: 1300px;
    color: white;
    font-size: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    
}
</style>