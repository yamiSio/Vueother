export default function drag(id) {
    //1.按下按键时播放对应的声音
    window.addEventListener('keydown', function (e) {
        const audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
        const key = document.querySelector('div[data-key="' + e.keyCode + '"]');
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
    });

    function removePlaying(e) {
        console.log(e);
        // 当和 transform 对比时 一直按键后 不会恢复原有样式 也不晓得为啥
        //if (e.propertyName !== transform) return;
        // 改成这句话又没问题了
        // if (e.propertyName !== border-top-color) return;
        if (e.propertyName !== 'border-top-color') return;
        this.classList.remove('playing');
    }

    //3.// 方法2效果转换之后，恢复到最初的状态
    //变化完成之后，移除playing
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        key.addEventListener('transitionend', removePlaying);
    });
}