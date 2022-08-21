<template>
  <VueperSlides>
    <VueperSlide v-for="(slide, idx) in list" :key="idx">
      <EventCard :eventImage="slide" />
    </VueperSlide>
  </VueperSlides>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import EventCard from '@/components/event/EventCard.vue';
export default {
    components: { VueperSlides, VueperSlide, EventCard },
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
            ],
            list: [0,1,2]
        }
    }
}
</script>

<style>

</style>