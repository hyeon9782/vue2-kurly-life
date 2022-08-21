<template>
    <div class="main-container">
      <div class="event-slide">

      </div>
      <ContentSlide  v-for="slide in slideList" :key="slide.category" :slide="slide"/>
    </div>
</template>

<script>
import ContentSlide from '@/components/contents/ContentSlide.vue';
export default {
  data(){
    return{
      slideList:[
        {
          title:"컬리의 인기 레시피",
          description: "이번 주 인기 있는 컬리의 식탁을 따라해봐요!",
          category: "recipe"
        },
        {
          title:"상황별 요리 레시피",
          description: "뭐 해먹을지 고민마요, 상황에 맞는 레시피가 여기 있어요!",
          category: "recipeTheme"
        },
        {
          title:"나 빼고 다 아는 생활팁",
          description: "알면 편안한 생활 꿀팁 모음집",
          category: "lifehack"
        },
        {
          title:"나만 알고싶은 맛집",
          description: "전국의 맛집에 대한 이야기를 들어보세요",
          category: "restaurant"
        },
        {
          title:"놓치면 후회할 딜",
          description: "이번 주 할인 상품 구경하세요!",
          category: "product"
        },
      ],
    }
  },
  components:{
    ContentSlide
  }
}
</script>

<style lang="scss" scoped>
.main-container{
    width: 480px;
    margin-top: 102px;
    .event-slide{
      width: 100%;
      height: 280px;
      background: lightgray;
    }

    .head{
      .title-box{

      }
    }
    
}
</style>