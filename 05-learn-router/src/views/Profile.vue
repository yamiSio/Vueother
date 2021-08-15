<template>
<div>
  <h2>我是profile档案</h2>
  <h2>{{$route.query.name}}</h2>
</div>
  <div class="ceshice"></div>
</template>

<script>
export default {
name: "Profile",
  created() {
    console.log('Profile created');

  },
  destroyed() {      //销毁
    console.log('Profile destroyed');
  },
}
</script>

<style scoped>
.ceshice{
  width: 100%;
  height: 1000px;
  background: #66ccff;
}
</style>