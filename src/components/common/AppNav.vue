<template>
  <div class="nav-container">
    <div class="menu">
      <span class="material-symbols-outlined">
        menu
      </span>
    </div>
    <router-link v-for="i in nav" :key="i.icon" :to="i.href" class="link">
      <span class="material-symbols-outlined">
        {{ i.icon }}
      </span>
    </router-link>
    <div class="write" @click="write">
      <span class="material-symbols-outlined">
        edit_square
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      nav: [
        {
          icon: "home",
          href: "/"
        },
        {
          icon: "search",
          href: "/search"
        },
        {
          icon: "person",
          href: "/mypage"
        },
      ]
    }
  },
  methods:{
    write(){
      
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-container{
    background: white;
    width: 480px;
    height: 70px;
    font-size: 48px;
    position: fixed;
    display: flex;
    justify-content: space-around;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    .link{
      text-decoration: none;
      color:black;
    }
}
</style>