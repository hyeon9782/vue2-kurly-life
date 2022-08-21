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
      <div class="full-view">
        전체보기 >
      </div>
    </div>
    <div class="slide-contents">
        
    </div>
  </div>
</template>

<script>
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
    }
}
</script>

<style lang="scss" scoped>
.contens-slide{
    padding: 10px;
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
}
</style>