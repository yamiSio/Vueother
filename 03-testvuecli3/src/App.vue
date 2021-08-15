<template>
  <div id="app">
    <div>测试</div>

    <div class="ceshi" :style="{background:this.sdf[Math.floor(Math.random()*3)].backcolor}" @click="random" >
      <p>1</p>
    </div>
  </div>
</template>
<!--{background:this.sdf[Math.floor(Math.random()*3)].backcolor}-->

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      message: 'nh',
      sdf:[
        {backcolor:"#66ccff"},
        {backcolor:"#888"},
        {backcolor:"#222"}
      ]
    }
    },
  methods: {
    randomRgb(item) {
      let R = Math.floor(Math.random() * 130 + 110);
      let G = Math.floor(Math.random() * 130 + 110);
      let B = Math.floor(Math.random() * 130 + 110);
      return {
        background: 'rgb(' + R + ',' + G + ',' + B + ')'
      };
    },
    ceshi(){
      this.$options.methods.random();
    },
    random(){
       // console.log(this.$options.methods.randomRgb().background);

      // 取x-y之间的随机整数
      // var result=Math.floor(Math.random()*(y+1-x)+x);
      // console.log(this.sdf[Math.floor(Math.random()*3)].backcolor);
      location.reload();
      return this.sdf[Math.floor(Math.random()*3)].backcolor;

    }
  }
}
</script>

<style>
div{
  width: 50px;
  height: 50px;
}
</style>
