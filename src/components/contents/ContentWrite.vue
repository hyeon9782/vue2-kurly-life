<template>
  <div class="content-write-page">
    <div class="write-header">
      <span class="material-symbols-outlined back">
        arrow_back_ios
      </span>
      <div class="header-title">
        글쓰기
      </div>
    </div>
    <div class="title-box">
      <div class="title-text">
        제목
      </div>
      <div class="title-input-box">
        <input type="text" class="title-input" placeholder="제목을 입력해주세요.">
      </div>
    </div>
    <div class="keyword-box">
      <div class="keyword-text">
        키워드
      </div>
      <div class="keyword-input-box">
        <input type="text" class="keyword-input" placeholder="키워드를 입력해주세요.">
      </div>
    </div>
    <div class="ingredient-box" v-if="category == 'recipe'">
      <div class="ingredient-text">
        재료
      </div>
      <div class="ingredient-input-box">
        <input type="text" class="ingredient-input" placeholder="재료를 입력해주세요.">
      </div>
    </div>
    <AppTiptap v-if="false"/>
    <EditorTiptap />
    <div class="upload-box">
      <div class="upload-btn" @click="storyUpload">
        스토리 공유하기
      </div>
    </div>
  </div>
</template>

<script>
import AppTiptap from '@/components/common/AppTiptap.vue';
import EditorTiptap from '@/components/common/EditorTiptap.vue';
export default {
  components:{
    AppTiptap,
    EditorTiptap
  },
  data(){
    return{
      category: "recipe"
    }
  },
  methods:{
    storyUpload(){
      const formData = {
        category: "",
        theme: "",
        title: "",
        keyword: "",
        ingredient: "",
      }
      console.log(formData);
    }
  }
}
</script>

<style lang="scss" scoped>
.content-write-page{
  margin-top:102px;
  width: 480px;
  .write-header{
    display: flex;
    padding: 10px;
    .back{
      font-size: 30px;
      color: rgb(190, 190, 190);
      width: 40px;
    }
    .header-title{
      font-size:24px;
      margin-left: 170px;
      width: 440px;
    }
  }
  .title-box{
    display: flex;
    padding: 10px;
    .title-text{
      width: 20%;
      font-size: 24px;
      color: lightgray;
      display: flex;
      // justify-content: center;
      align-items: center;
    }
    .title-input-box{
      width: 80%;
      .title-input{
        width: 100%;
        height: 25px;
      }
    }
  }
  .keyword-box{
    display: flex;
    padding: 10px;
    .keyword-text{
      width: 20%;
      font-size: 24px;
      color: lightgray;
      display: flex;
      // justify-content: center;
      align-items: center;
    }
    .keyword-input-box{
      width: 80%;
      .keyword-input{
        width: 100%;
        height: 25px;
      }
    }
  }
  .ingredient-box{
    display: flex;
    padding: 10px;
    .ingredient-text{
      width: 20%;
      font-size: 24px;
      color: lightgray;
      display: flex;
      // justify-content: center;
      align-items: center;
    }
    .ingredient-input-box{
      width: 80%;
      .ingredient-input{
        width: 100%;
        height: 25px;
      }
    }
  }
  .upload-box{
    display: flex;
    justify-content: center;
    align-items: center;
    .upload-btn{
      background: rgb(249, 243, 255);
      color: rgb(142, 68, 173);
      border-radius: 30px;
      padding: 15px 20px 15px 20px;
      
    }
  }
}
</style>