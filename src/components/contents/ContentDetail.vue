<template>
  <div class="content-detail">
    <div class="title">
      {{}}
    </div>
    <div class="detail-head">
      <div class="user-box">
        <div class="user-img-box">
          <img :src="img" alt="img">
        </div>
        <div class="user-info">
          <div class="nickname">
            {{ nickname }}
          </div>
          <div class="upload-date">
            {{ uploadDate }}
          </div>
        </div>
      </div>
      <div class="follow-btn">
        
      </div>
    </div>
    <div class="content">
      
    </div>
    <div class="click-box">

    </div>
    <div class="user-box">

    </div>
  </div>
</template>

<script>
export default {
  props:{

  }
}
</script>

<style>
.content-detail{
  margin-top:102px;
  width: 480px;
}
</style>