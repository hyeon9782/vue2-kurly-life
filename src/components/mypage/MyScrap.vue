<template>
  <div class="my-scrap">
    <div class="scrap-header">
      <!-- <div class="back"> -->
        <span class="material-symbols-outlined back">
          arrow_back_ios
        </span>
      <!-- </div> -->
      <div class="title">
        스크랩
      </div>
    </div>
    <div>
      <UserContent />
    </div>
  </div>
</template>

<script>
import UserContent from '@/components/user/UserContent.vue';
export default {
    components:{
        UserContent
    }
}
</script>

<style lang="scss" scoped>
.my-scrap{
    margin-top:102px;
    width: 480px;
    .scrap-header{
      display: flex;
      padding: 10px;
      .back{
        font-size: 30px;
        color: rgb(190, 190, 190);
        width: 40px;
      }
      .title{
        font-size:24px;
        margin-left: 170px;
        width: 440px;
      }
    }
}
</style>