<template>
  <div class="product-card">
    <div class="product-image">
      <img :src="item.url" alt="재료">
    </div>
    <div class="product-title">
      {{ item.title }}
    </div>
    <div class="product-price">
      {{ price }}원
    </div>
  </div>
</template>

<script>
export default {
  props:{
    item:{
      type: Object,
      default: () => ({})
    }
  },
  computed:{
    price(){
      return this.item.price 
    }
  }
}
</script>

<style lang="scss" scoped>
.product-card{
  width: 150px;
  // height: 250px;
  background: lightgray;
  .product-image{
    width: 150px;
    height: 150px;
  }
  .product-title{
    font-size: 18px;
  }
  .product-price{
    font-size: 18px;
    font-weight: bold;
  }

}
</style>