<template>
<div id="ceshi">
  <div class="keys">
    <div data-key="65" class="key">
      <kbd>A</kbd>
      <span class="sound">clap</span>
    </div>
    <div data-key="83" class="key">
      <kbd>S</kbd>
      <span class="sound">hihat</span>
    </div>
    <div data-key="68" class="key">
      <kbd>D</kbd>
      <span class="sound">kich</span>
    </div>
    <div data-key="70" class="key">
      <kbd>F</kbd>
      <span class="sound">openhat</span>
    </div>
    <div data-key="71" class="key">
      <kbd>G</kbd>
      <span class="sound">boom</span>
    </div>
    <div data-key="72" class="key">
      <kbd>H</kbd>
      <span class="sound">ride</span>
    </div>
    <div data-key="74" class="key">
      <kbd>J</kbd>
      <span class="sound">snare</span>
    </div>
    <div data-key="75" class="key">
      <kbd>K</kbd>
      <span class="sound">tom</span>
    </div>
    <div data-key="76" class="key">
      <kbd>L</kbd>
      <span class="sound">tink</span>
    </div>
  </div>
  <audio data-key="65" src="./sounds/clap.wav"></audio>
  <audio data-key="83" src="./sounds/hihat.wav"></audio>
  <audio data-key="68" src="./sounds/kick.wav"></audio>
  <audio data-key="70" src="./sounds/openhat.wav"></audio>
  <audio data-key="71" src="./sounds/boom.wav"></audio>
  <audio data-key="72" src="./sounds/ride.wav"></audio>
  <audio data-key="74" src="./sounds/snare.wav"></audio>
  <audio data-key="75" src="./sounds/tom.wav"></audio>
  <audio data-key="76" src="./sounds/tink.wav"></audio>
</div>
</template>

<script>
export default {
name: "User",
  computed:{
   userId(){
    return this.$route.params.abv    //获取当前显示的页面路由,
                                     // 注意params后面的要和router.js内定义动态路由后一致
                                     //params.一样=/user/:一样
   }
  },
  mounted(){
      window.addEventListener('keydown', function (e) {
        const audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
        console.log(audio)
        const key = document.querySelector('div[data-key="' + e.keyCode + '"]');
        console.log(key)
        //const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
        //按键为其他值，直接返回退出了，防止报错
        if (!audio) return;
        //每次按下将播放时间从0开始
        audio.currentTime = 0;
        audio.play();
        //2.按下按键时改变该按键的一个显示效果
        key.classList.add('playing');
        //方法1
        // setTimeout(function(){
        // 	key.classList.remove('playing');
        // },70);
        const keys=document.querySelectorAll('.key');
        keys.forEach(key=>{
          key.addEventListener('transitionend',drrr);
        });
        function  drrr(){
          if(e.propertyName !=='border-top-color') return;
          this.classList.remove('playing');
        }
      });
  },
  methods:{

  }

}
</script>

<!--scoped 作用于当前模块-->
<style scoped>
html {
  font-size: 10px;
  /*background: url(https://i.imgur.com/b9r5sEL.jpg) bottom center; */
  background-size: cover;
}

body,html {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.keys {
  display: flex;
  flex: 1;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.key {
  border: .4rem solid black;
  border-radius: .5rem;
  margin: 1rem;
  font-size: 1.5rem;
  padding: 1rem .5rem;
  transition: all .07s ease;
  width: 10rem;
  text-align: center;
  color: white;
  background: rgba(0,0,0,0.4);
  text-shadow: 0 0 .5rem black;
}

.playing {
  transform: scale(1.1);
  border-color: #ffc600;
  box-shadow: 0 0 1rem #ffc600;
}

kbd {
  display: block;
  font-size: 4rem;
}

.sound {
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: .1rem;
  color: #ffc600;
}
</style>
