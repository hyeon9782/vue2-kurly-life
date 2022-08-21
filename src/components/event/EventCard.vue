<template>
  <div class="event-card">
    {{ eventImage }}
    <img :src="eventImage" alt="이벤트 카드">
  </div>
</template>

<script>
export default {
    props:{
        eventImage:{
            type: String,
            default: () => ('')
        }
    }
}
</script>

<style>
.event-card{
    z-index: 9;
    width: 100%;
    height: 300px;
    background: lightgray;
}
</style>