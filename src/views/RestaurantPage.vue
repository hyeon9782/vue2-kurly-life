<template>
  <div class="restaurant-contaner">
    <ContentTheme category="restaurant" />
    <div class="card-container">
      <template v-if="itemList == null || itemList.length == 0">
        <NoData />
      </template>
      <template v-else>
        <ContentCard v-for="(item, idx) in itemList" :key="idx"  :item="item"/>
      </template>
    </div>
  </div>
</template>

<script>
import ContentTheme from '@/components/contents/ContentTheme.vue';
import ContentCard from '@/components/contents/ContentCard.vue';
import NoData from '@/components/common/NoData.vue';
export default {
  components:{
    ContentTheme,
    ContentCard,
    NoData
  },
  data(){
    return{
      itemList: [
        {
          url: "",
          title: "테스트 제목입니다.",
          likeNum: 3,
          scrapNum: 6,
        },
        {
          url: "",
          title: "테스트 제목입니다.",
          likeNum: 3,
          scrapNum: 6,
        },
        {
          url: "",
          title: "테스트 제목입니다.",
          likeNum: 3,
          scrapNum: 6,
        },
        {
          url: "",
          title: "테스트 제목입니다.",
          likeNum: 3,
          scrapNum: 6,
        },
        {
          url: "",
          title: "테스트 제목입니다.",
          likeNum: 3,
          scrapNum: 6,
        },
        {
          url: "",
          title: "테스트 제목입니다.",
          likeNum: 3,
          scrapNum: 6,
        },
      ]
      
    }
  }
}
</script>

<style lang="scss" scoped>
.restaurant-contaner{
  margin-top:102px;
  width: 480px;
  .card-container{
    display: flex;
    flex-wrap: wrap;
  }
}
</style>