<template>
  <div class="follow-btn">
    <span class="material-symbols-outlined icon">
      add
    </span>
    <div class="follow-text">
      팔로우
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" socped>
.follow-btn{
  display: flex;
  // justify-content: space-around;
  align-items: center;
  height: 43px;
  width: 115px;
  font-size: 18px;
  background: rgb(142, 68, 173);
  border-radius: 30px;
  color: white;
  .icon{
    font-size: 32px;
    font-weight: bold;
    width: 25%;
    padding-left: 5px;
  }
  .follow-text{
    width: 75%;
    font-weight: bold;
    text-align: center;
  }
}
</style>