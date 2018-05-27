const volUp = document.getElementById('vol-up-js');
const volDown = document.getElementById('vol-down-js');
const backMusic = document.getElementById('audio-js');

volUp.addEventListener("click", function(){volumeButtonControls(backMusic)}, false);
volDown.addEventListener("click", function(){volumeButtonControls(backMusic)}, false);

function volumeButtonControls(sound){
    if (sound.paused) {
        sound.play();
        volUp.style.display = 'block';
        volDown.style.display = 'none';
        isMuted = false;
    }
    else{
        sound.pause();
        volUp.style.display = 'none';
        volDown.style.display = 'block';
        isMuted = true;
    }
    return isMuted;
}

window.addEventListener("mousemove",function(e) {

  var width = window.innerWidth;
  var height = window.innerHeight;
  var clientHeight = document.body.clientHeight;
  var skew = {}
  skew.y = (1.5 * ((e.x / width) - 0.5)) 
  skew.x = -(1.5 * ((e.y / height) - 0.5));

  document.body.style.webkitTransform = "scale(1.01) perspective("+clientHeight+"px) rotateX("+skew.x+"deg) rotateY("+skew.y+"deg)";
  document.getElementById('posty-js').style.webkitTransform = "translateY(75px) translateX(25px) translateZ(70px) scale(1.7) perspective("+clientHeight+"px) rotateX("+(skew.x*15)+"deg) rotateY("+(skew.y*15) +"deg)"
})