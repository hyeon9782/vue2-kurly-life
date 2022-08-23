<template>
  <div class="user-content">
    <div class="user-content-tab">
      <div class="tab" v-for="(tab, idx) in tabs" :key="idx" :class="{select:idx==active}" @click="searchScrapContents(idx,tab.category)">
        {{ tab.text }}
      </div>    
    </div>
    <div class="content-container">
      <div class="content-card" v-for="scrapContent in scrapContents" :key="scrapContent.id" @click="detail(scrapContent.id)">
        <img :src="scrapContent.url" alt="img" width="100%">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tabs: [
        {
          text: "모두",
          category: ""
        },
        {
          text: "레시피",
          category: "recipe"
        },
        {
          text: "생활팁",
          category: "tip"
        },
        {
          text: "맛집",
          category: "popular-restaurant"
        },
      ],
      active: 0,
      categoryType: ""
    }
  },
  computed:{
    scrapContents(){
      return this.$store.state.contents.scrapContents
    }
  },
  created(){
    this.searchScrapContents()
  },
  methods:{
    detail(id){
      this.$router.push(`/content/${id}`)
    },
    change(idx){
      this.active = idx
    },
    searchScrapContents(idx,category){
      this.change(idx ? idx : 0)
      this.$store.dispatch('contents/searchScrapContents',{
        pageNum: 0,
        category: category ? category : "",
        userId: 12
      })
      console.log(category)
    }
  }
}
</script>

<style lang="scss" scoped>
.user-content{
  width: 480px;
  .user-content-tab{
    display: flex;
    justify-content: space-around;
    border-bottom: 2px solid rgb(190, 190, 190);
    .tab{
      font-size: 18px;
      padding: 10px;
    }
  }
  .content-container{
    display: flex;
    flex-wrap: wrap;
    .content-card{
      width: 240px;
      height: 240px;
      background: yellowgreen;
      
    }
  }
}
.select{
  border-bottom: 6px solid rgb(97, 2, 129) !important;
  color: rgb(142, 68, 173) !important;
}
</style>