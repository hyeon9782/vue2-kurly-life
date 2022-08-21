<template>
  <div class="user-box">
    <div class="user-img-box">
      <img :src="img" alt="img">
    </div>
    <div class="user-info">
      <div class="nickname">
        {{ nickname }}
      </div>
      <div class="upload-date">
        {{ uploadDate }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    img:{
      type: String,
      default: () => ("")
    },
    nickname: {
      type: String,
      default: () => ("노른자없는 계란")
    },
    uploadDate: {
      type: String,
      default: () => ("2022-08-20")
    }
  }
}
</script>

<style lang="scss" scoped>
.user-box{
  display: flex;
  padding: 10px;
  .user-img-box{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: red;
    // margin: 10px;
  }
  .user-info{
    .nickname{
      padding: 5px 5px 5px 5px;
    }
    .upload-date{
      padding-left: 5px;
    }
  }
}
</style>