<template>
  <div class="content-write-page">
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
    <div class="ingredient-box" v-if="this.$route.params.category == 'recipe'">
      <div class="ingredient-text">
        재료
      </div>
      <div class="ingredient-input-box">
        <input type="text" class="ingredient-input" placeholder="재료를 입력해주세요.">
      </div>
    </div>
    <div>  
      <VueEditor v-model="content" />
      <div>
        {{ content }}
      </div>
    </div>
    <div class="upload-box">
      <div class="upload-btn" @click="storyUpload">
        스토리 공유하기
      </div>
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor/dist/vue2-editor.core.js";
export default {
  components:{
    VueEditor
  },
  data(){
    return{
      content: null
    }
  },
  created(){
    this.setEditorContent()
  },
  methods:{
    storyUpload(){
      const bulletinData = {
        category: "",
        theme: "",
        title: "",
        keyword: "",
        ingredient: "",
        
      }
      console.log(bulletinData);
      alert(this.content)
    },
    setEditorContent() {
      this.content = "<h1>Html For Editor</h1>";
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~vue2-editor/dist/vue2-editor.css";

/* Import the Quill styles you want */
@import '~quill/dist/quill.core.css';
@import '~quill/dist/quill.bubble.css';
@import '~quill/dist/quill.snow.css';
.content-write-page{
  width: 480px;
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
      text-align: center;
      .title-input{
        width: 90%;
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
      text-align: center;
      .keyword-input{
        width: 90%;
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
      text-align: center;
      .ingredient-input{
        width: 90%;
        height: 25px;
      }
    }
  }
  .upload-box{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    .upload-btn{
      background: rgb(249, 243, 255);
      color: rgb(142, 68, 173);
      border-radius: 30px;
      padding: 15px 20px 15px 20px;
      
    }
  }
}
</style>