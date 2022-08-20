<template>
  <div class="theme-box">
    <template v-if="category === 'recipe'">
      <div v-for="(i, idx) in recipeTheme" :key="idx" class="theme-item">
          {{ i }}
      </div>
    </template>
    <template v-if="category === 'lifehack'">
      <div v-for="(i, idx) in lifehackTheme" :key="idx" class="theme-item">
          {{ i }}
      </div>
    </template>
    <template v-if="category === 'restaurant'">
      <div v-for="(i, idx) in restaurantTheme" :key="idx" class="theme-item">
          {{ i }}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data(){
    return{
        recipeTheme: ["전체", "저녁", "간식", "생일", "야식", "베이커리", "초간단", "요리", "음료", "아이들 간식"],
        lifehackTheme: ["전체", "요리", "보관", "정리", "살림템", "청소", "기타"],
        restaurantTheme: ["전체", "한식", "중식", "일식", "퓨전", "이탈리안", "프렌치"]
    }
  },
  props:{
    category:{
      type: String,
      default: () => ('')
    }
  }
}
</script>

<style lang="scss" scoped>
.theme-box{
  display: flex;
  justify-content: center;
  width: 480px;
  flex-wrap: wrap;
  .theme-item{
    background: lightgray;
    border-radius: 5px;
    padding: 7px 10px 7px 10px;
    margin: 5px;
    font-size:18px;
  }
}
</style>