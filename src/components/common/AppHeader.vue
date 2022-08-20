<template>
  <div class="header-container">
    <div class="header">
      <div class="logo">
        <img src="../../assets/kurly-logo.jpg" alt="logo" width="50px">
      </div>
      <div class="header-select">
        <div v-for="i in select" :key="i.id" class="select-item">
          {{ i.text }}
        </div>
      </div>
      <div class="header-icon">
        <div class="location">
          <span class="material-symbols-outlined">
            location_on
          </span>
        </div>
        <div class="cart">
          <span class="material-symbols-outlined">
            shopping_cart
          </span>
        </div>
      </div>
    </div>
    <AppHeaderNav />
  </div>
</template>

<script>
import AppHeaderNav from '@/components/common/AppHeaderNav.vue';
export default {
  components:{
    AppHeaderNav
  },
  data(){
    return{
      select: [
        {
          text: "마켓컬리",
          link: "/",
          id: 0
        },
        {
          text: "뷰티컬리",
          link: "/",
          id: 1,
        },
        {
          text: "컬리의 일상",
          link: "/",
          id: 2
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header-container{
    position: fixed;
    .header{
      background: rgb(97, 2, 129);
      width: 480px;
      height: 52px;
      color: black;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .header-select{
        display: flex;
        background: rgb(155, 89, 182);
        color: white;
        margin-left: 5px;
        
        border-radius: 15px;
        .select-item{
          padding: 10px;
          border-radius: 15px;
        }
      }
      .header-icon{
        display: flex;
        justify-content: space-around;
        width: 100;
        .location{
          color: white;
        }
        .cart{
          margin-left: 15px;
          color: white;
        }
      }
    }
}
</style>