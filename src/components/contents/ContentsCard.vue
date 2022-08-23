<template>
  <div class="content-card">
    <div class="content-image" @click="detail">
      <AppImage :img="item.url" height="210"/>
    </div>
    <div class="content-title">
      {{ item.title }}
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
  </div>
</template>

<script>
import AppImage from '@/components/common/AppImage.vue';
export default {
  components:{
    AppImage
  },
  props:{
    item:{
      type: Object,
      default: () => ({}),
      url:{
        type: String,
        default: () => ('')
      },
      title:{
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
      }
    }
  },
  methods:{
    detail(){
      const id = "531326312"
      this.$router.push(`/contents/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.content-card{
  padding: 5px;
  .content-image{
    width: 210px;
    height: 210px;
  }
  .content-title{
    padding: 10px 0 10px 0;
    font-size: 18px;
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
}

.black{
  color: black;
}
</style>