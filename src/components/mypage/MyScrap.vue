<template>
  <div class="my-scrap">
    <div>
      <UserContent />
    </div>
  </div>
</template>

<script>
import UserContent from '@/components/user/UserContent.vue';
export default {
    components:{
        UserContent,
    }
}
</script>

<style lang="scss" scoped>
.my-scrap{
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