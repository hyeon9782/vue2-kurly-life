<template>
  <div class="recipe-container">
    <ContentTheme category="recipe" theme=""/>
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
import ContentTheme from '@/components/contents/ContentsTheme.vue';
import ContentCard from '@/components/contents/ContentsCard.vue';
export default {
  components:{
    ContentTheme,
    ContentCard
  },
  created(){
    alert(this.test)
  },
  methods:{
    searchRecipe(){
      this.$store.dispatch('contents/searchContents',{
        pageNum: "",
        searchText: "",
        category: "",
        theme: "",
        userId: "",
      })
    }
  },
  comments:{
    test(){
      return this.$route.params.theme
    }
  },
  computed:{
    recipeList(){
      return this.$store.state.contents.contents
    }
  },
  data(){
    return{
      selectTheme: "",
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
.recipe-container{
  margin-top:102px;
  width: 480px;
  .card-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}
</style>