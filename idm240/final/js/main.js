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

//Fades in all elements on the page after they are loaded
window.onload = fadeIn();
function fadeIn(){
  const allElements = document.getElementsByTagName('*');

    for (i = 0; i < allElements.length; i++){
      if ((allElements[i].classList != "") && (allElements[i].classList != 'item__header')){
        try{
          allElements[i].style.animation = `fade-in 1.5s ease-in`;
        }
        catch{
          console.log('nope');
        }
      }
    }

  //Removes all fade-in animations after they are complete. Other animations won't work w/o this
  setTimeout(function(){
    for (i = 0; i < allElements.length; i++){
      allElements[i].style.animation = ''
    }
  }, 2000);
}
