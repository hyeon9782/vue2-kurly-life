<template>
  <div class="contens-slide">
    <div class="slide-head">
      <div class="title-box">
        <div class="title">
          {{ slide.title }}
        </div>
        <div class="description">
          {{ slide.description }}
        </div>
      </div>
      <div class="full-view" @click="fullView(slide.category)" v-if="slide.category != 'product'">
        전체보기 >
      </div>
    </div>
    <div class="slide-box">
        <AppSlide />
    </div>
  </div>
</template>

<script>
import AppSlide from '@/components/common/AppSlide.vue';
export default {
    props:{
        slide:{
            type: Object,
            defualt: () => ({}),
            title:{
                type: String,
                defualt: () => ('')
            },
            description:{
                type: String,
                default: () => ('')
            },
            category:{
                type: String,
                default: () => ('')
            }
        }
    },
    components:{
        AppSlide
    },
    methods:{
        fullView(category){
            let param = ""
            switch(category){
                case 'recipe':
                    param = 'recipe'
                    break;
                case 'recipeTheme':
                    param = 'recipeTheme'
                    break;
                case 'lifehack': 
                    param = 'lifehack'
                    break;
                case 'restaurant': 
                    param = 'restaurant'
                    break;
                case 'product': 
                    param = 'product'
                    break;
            }

            this.$router.push(`/${param}`)
        }
    }
}
</script>

<style lang="scss" scoped>
.contens-slide{
    padding: 10px;
    margin: 15px 0 15px 0;
    .slide-head{
        display: flex;
        justify-content: space-between;
        .title-box{
            width: 78%;
            .title{
                font-size:24px;
                font-weight: bold;
                padding: 5px;
            }
            .description{
                font-size: 14px;
                color: lightgray;
                padding: 5px;
            }
        }
        .full-view{
            width: 22%;
            font-size: 20px;
            color: plum;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    // .slide-box{
    //     slide
    // }
}
</style>