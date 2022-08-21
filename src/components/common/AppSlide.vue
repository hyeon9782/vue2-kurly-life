<template>
  <vueper-slides
    class="no-shadow"
    :visible-slides="2"
    :slide-ratio="1 / 4"
    :dragging-distance="70">
    <vueper-slide v-for="i in 4" :key="i" :title="i.toString()" class="test">
        <template v-slot:content>
            <ContentCard />
        </template>
    </vueper-slide>
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import ContentCard from '@/components/contents/ContentCard.vue';
import 'vueperslides/dist/vueperslides.css'
export default {
  components: { VueperSlides, VueperSlide, ContentCard },
  computed:{
    itemList(){
        return []
    }
  },
  data(){
    return{
        slides: [
            {
                title: 'Slide #1',
                content: 'Slide 1 content.'
            },
            {
                title: 'Slide #2',
                content: 'Slide 2 content.'
            }
        ]
    }
  }
}
</script>

<style>
.test{
    height: 500px;
}
</style>