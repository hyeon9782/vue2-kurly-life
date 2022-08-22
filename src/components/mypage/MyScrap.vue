<template>
  <div class="my-scrap">
    <SubHeader title="스크랩"/>
    <div>
      <UserContent />
    </div>
  </div>
</template>

<script>
import SubHeader from '@/components/common/SubHeader.vue';
import UserContent from '@/components/user/UserContent.vue';
export default {
    components:{
        UserContent,
        SubHeader
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