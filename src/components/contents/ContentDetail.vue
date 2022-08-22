<template>
  <div class="content-detail">
    <SubHeader />
    <div class="title-box">
      {{ title }}
    </div>
    <div class="detail-head">
      <UserBox />
      <FollowBtn />
    </div>
    <div class="content-container">
      <div v-for="content in contents" :key="content.text" class="content-module">
        <div class="content-text" v-if="content.text != null && content.text != ''">
          {{ content.text }}
        </div>
        <div class="content-img" v-if="content.img != null && content.img != ''">
          <AppImage :img="content.img" v-if="false"/>
        </div>
      </div>
    </div>
    <div class="click-box">

    </div>
    <div class="user-box">

    </div>
    <div class="comments-box">

    </div>
    <div class="product-box">
      <ProductCard />
    </div>
    <div class="recipe-box">
      <ScrollUp />
    </div>
  </div>
</template>

<script>
import FollowBtn from '@/components/following/FollowBtn.vue';
import UserBox from '@/components/user/UserBox.vue';
import SubHeader from '@/components/common/SubHeader.vue'
import AppImage from '@/components/common/AppImage.vue';
import ProductCard from '@/components/product/ProductCard.vue';
import ScrollUp from '@/components/common/ScrollUp.vue';
export default {
  data(){
    return{
      title: "세상에서 가장 맛있는 가지 레시피ddddd",
      img: "",
      nickname: "노른자없는계란",
      uploadDate: "2022-08-20",
      userId: "312",
      myId: "312",
      contents: [
        {
          text: '안녕하세요!!!!!!!!!!!!!!!!!!!!!!!!!!',
          img: ''
        },
        {
          text: '저는!!!!!!!!!!!!!!!!!!!!',
          img: 'ㄴㅁㅇ'
        },
        {
          text: '안녕안녕',
          img: ''
        },
        {
          text: '내 이름은 디보',
          img: 'ㅁㄴㅇ'
        },
      ],
    }
  },
  components:{
    FollowBtn,
    UserBox,
    SubHeader,
    AppImage,
    ProductCard,
    ScrollUp
  }
}
</script>

<style lang="scss" scoped>
.content-detail{
  margin-top:102px;
  width: 480px;
  .title-box{
    font-size: 28px;
    font-weight: bold;
    padding: 20px;
    text-align: center;
  }
  .detail-head{
    display: flex;
    justify-content: space-between;
  }
  .content-container{
    .content-module{
      padding: 10px;
      .content-text{
        
      }
      .content-img{
        height: 460px;
      }
    }
  }
}
</style>