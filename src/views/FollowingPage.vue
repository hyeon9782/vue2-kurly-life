<template>
  <div class="following-container">
    <template v-if="itemList == null || itemList.length == 0">
      <NoData />
    </template>
    <template v-else>
      <FollowingCard v-for="(item, idx) in itemList" :key="idx" :item="item"/>
    </template>
  </div>
</template>

<script>
import FollowingCard from '@/components/following/FollowingCard.vue';
import NoData from '@/components/common/NoData.vue'
export default {
  components:{
    FollowingCard,
    NoData
  },
  data(){
    return{
      itemList: [
        {
          img: "",
          nickname: "테스트 닉네임",
          uploadDate: "2022-08-20",
          thumbnail: "",
          likeNum: 53,
          scrapNum: 19,
          title: "테스트 제목입니다.",
          content: "테스트 중인 글 내용입니다. 어디까지 나올까요??????????????여기도?????????????여기는????????"
        },
        {
          img: "",
          nickname: "테스트 닉네임",
          uploadDate: "2022-08-20",
          thumbnail: "",
          likeNum: 53,
          scrapNum: 19,
          title: "테스트 제목입니다.",
          content: "테스트 중인 글 내용입니다. 어디까지 나올까요??????????????여기도?????????????여기는????????"
        },
        {
          url: "",
          nickname: "테스트 닉네임",
          uploadDate: "2022-08-20",
          thumbnail: "",
          likeNum: 53,
          scrapNum: 19,
          title: "테스트 제목입니다.",
          content: "테스트 중인 글 내용입니다. 어디까지 나올까요??????????????여기도?????????????여기는????????"
        },
        {
          url: "",
          nickname: "테스트 닉네임",
          uploadDate: "2022-08-20",
          thumbnail: "",
          likeNum: 53,
          scrapNum: 19,
          title: "테스트 제목입니다.",
          content: "테스트 중인 글 내용입니다. 어디까지 나올까요??????????????여기도?????????????여기는????????"
        },
      ]
    }
  }
}
</script>

<style>
.following-container{
  margin-top:102px;
  width: 480px;
}
</style>