<template>
  <div class="following-card">
    <div class="user-box">
      <div class="user-img-box">
        <img :src="item.img" alt="img">
      </div>
      <div class="user-info">
        <div class="nickname">
          {{ item.nickname }}
        </div>
        <div class="upload-date">
          {{ item.uploadDate }}
        </div>
      </div>
    </div>
    <div class="thumbnail-box" @click="detail">
      <img :src="item.thumbnail" alt="img" width="100%">
    </div>
    <div class="click-box">
      <div class="like-box">
        <div class="like-icon">
          <span class="material-symbols-outlined">
            thumb_up
          </span>
        </div>
        <div class="like-no">
          {{ item.likeNum }}
        </div>
      </div>
      <div class="scrap-box">
        <div class="scrap-icon">
          <span class="material-symbols-outlined">
            bookmarks
          </span>
        </div>
        <div class="scrap-no">
          {{ item.scrapNum }}
        </div>
      </div>
    </div>
    <div class="title">
      {{ item.title }}
    </div>
    <div class="content-box">
      {{ item.content }}
    </div>
  </div>
</template>

<script>
export default {
  props:{
    item:{
      img:{
        type: String,
        default: () => ('')
      },
      nickname:{
        type: String,
        default: () => ('')
      },
      uploadDate:{
        type: String,
        default: () => ('')
      },
      thumbnail:{
        type: String,
        default: () => ('')
      },
      likeNum:{
        type: Number,
        default: () => (0)
      },
      scrapNum:{
        type: Number,
        default: () => (0)
      },
      title:{
        type: String,
        default: () => ('')
      },
      content:{
        type: String,
        default: () => ('')
      }
    }
  },
  methods:{
    detail(){
      const id = "531326312"
      this.$router.push(`/content/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.following-card{
  padding: 10px;
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
  .thumbnail-box{
    width: 450px;
    height: 450px;
    background: green;
  }
  .click-box{
    display: flex;
    padding: 5px;
    .like-box{
      display: flex;
      width: 50%;
      .like-no{
        margin-left: 10px;
        margin-top: 3px;
      }
    }
    .scrap-box{
      display: flex;
      width: 50%;
      .scrap-no{
        margin-left: 10px;
        margin-top: 3px;
      }
    }
  }
  .title{
    font-size:24px;
    padding: 5px;
  }
  .content-box{
    padding: 5px;
  }
}
</style>