<template>
  <div class="sub-header" @click="back">
    <span class="material-symbols-outlined back">
      arrow_back_ios
    </span>
    <div class="header-title">
        {{ title }}
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        back(){
            this.$router.back()
        }
    },
    props:{
        title:{
            type: String,
            default: () => ("")
        }
    }
}
</script>

<style lang="scss" scoped>
.sub-header{
    display: flex;
    padding: 10px;
    .back{
        font-size: 30px;
        color: rgb(190, 190, 190);
    }
    .header-title{
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>