<template>
  <div class="lifehack-container">
    <ContentTheme category="lifehack"/>
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
  }
}
</script>

<style lang="scss" scoped>
.lifehack-container{
  margin-top:102px;
  width: 480px;
  .card-container{
    display: flex;
    flex-wrap: wrap;
  }
}
</style>