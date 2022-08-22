<template>
  <div class="content-card-mini">
    <div class="content-image" @click="detail">
        <img :src="content.url" alt="메인 컨텐츠" width="100%">
    </div>
    <div class="content-title">
      {{ content.title }}
    </div>
  </div>
</template>

<script>
export default {
    props:{
        content:{
            type: Object,
            default: () => ({}),
            
        }
    },
    methods:{
        detail(){
            this.$router.push(`/detail/${this.content.contentId}`)
        }
    }
}
</script>

<style lang="scss" scoped>
.content-card-mini{
    width: 150px;
    height: 150px;
    background: lightgray;
}
</style>