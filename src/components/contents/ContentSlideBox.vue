<template>
  <div class="contents-slide-box">
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
        <ContentSlide :contents="contents" v-if="slide.category !== 'recipeTheme' && slide.category !== 'product'"/>
        <ThemeSlide :theme="theme"  v-if="slide.category === 'recipeTheme'" />
        <ProductSlide :products="products"  v-if="slide.category === 'product'"/>
    </div>
  </div>
</template>

<script>
import ProductSlide from '@/components/product/ProductSlide.vue';
import ThemeSlide from '@/components/contents/ThemeSlide.vue';
import ContentSlide from '@/components/contents/ContentSlide.vue';
export default {
    data(){
        return{
            theme:[""],
            products:[
                {
                    img: "",
                    title: "이거 싸다 1",
                    price: 635123,
                    discount: 72
                },
                {
                    img: "",
                    title: "이거 싸다 2",
                    price: 889124,
                    discount: 53
                },
                {
                    img: "",
                    title: "이거 싸다 3",
                    price: 255125,
                    discount: 13
                },
                {
                    img: "",
                    title: "이거 싸다 4",
                    price: 382525,
                    discount: 5
                },
                {
                    img: "",
                    title: "이거 싸다 5",
                    price: 789923,
                    discount: 21
                },
            ],
            contents: [
                {
                    url: "",
                    title: "테스트입니다 1",
                    contentId: "312513",
                },
                {
                    url: "",
                    title: "테스트입니다 2",
                    contentId: "9y7433",
                },
                {
                    url: "",
                    title: "테스트입니다 3",
                    contentId: "319162",
                },
                {
                    url: "",
                    title: "테스트입니다 4",
                    contentId: "028532",
                },
                {
                    url: "",
                    title: "테스트입니다 5",
                    contentId: "956124",
                },
            ]
        }
    },
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
        ContentSlide,
        ThemeSlide,
        ProductSlide
    },
    methods:{
        fullView(category){
            let param = ""
            switch(category){
                case 'recipe':
                    param = 'recipe'
                    break;
                case 'recipeTheme':
                    param = 'recipe'
                    break;
                case 'lifehack': 
                    param = 'lifehack'
                    break;
                case 'restaurant': 
                    param = 'restaurant'
                    break;
            }
            this.$router.push({name: 'contents', params: {category: param }})
        },
    }
}
</script>

<style lang="scss" scoped>
.contents-slide-box{
    padding: 10px;
    margin: 30px 0 30px 0;
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