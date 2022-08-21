<template>
  <div class="user-content">
    <div class="user-content-tab">
      <div class="tab" v-for="(i, idx) in tab" :key="idx">
        {{ i }}
      </div>    
    </div>
    <div class="content-container">
      <div class="content-card" v-for="content in contents" :key="content.id" @click="detail(content.id)">
        <img :src="content.url" alt="img" width="100%">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tab: ["모두", "레시피", "생활팁", "맛집"],
      contents: [
        {
          url: "",
          title: "",
          id: "1",
        },
        {
          url: "",
          title: "",
          id: "2",
        },
        {
          url: "",
          title: "",
          id: "3",
        },
        {
          url: "",
          title: "",
          id: "4",
        },
        {
          url: "",
          title: "",
          id: "5",
        }
      ]
    }
  },
  methods:{
    detail(id){
      this.$router.push(`/content/${id}`)
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
</style>