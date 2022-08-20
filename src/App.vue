<template>
  <div id="app">
    <div>
      <AppHeader />
      <router-view/>
      <AppFooter />
      <AppNav />
    </div>
  </div>
</template>


<script>
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';
import AppNav from '@/components/common/AppNav.vue';
export default {
  components:{
    AppHeader,
    AppFooter,
    AppNav,
  }
}
</script>


<style lang="scss">

body{
  font-family: 'Nanum Gothic', sans-serif;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  background: rgba(0,0,0,0);
}
</style>
