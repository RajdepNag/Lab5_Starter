// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const horn = document.querySelector('#horn-select'); 
  const sound = document.getElementsByTagName("audio");
  const page_images = document.getElementsByTagName("img");
  //console.log(page_images.length);
  
  
    
  horn.addEventListener('click', function(){
   // console.log(horn.value);
   if (horn.value != "select") {
     page_images[0].src = "assets/images/" + horn.value + ".svg"; 
     sound.src = "assets/audio/" + horn.value + ".mp3";
     //console.log(sound.src);
   }

  });  

  const noise = document.getElementById('volume');
  //console.log(noise.value);

  noise.addEventListener('change', function(){
    console.log(noise.value);
    if (noise.value == 0) 

      page_images[1].src = "assets/icons/volume-level-0.svg";

    else if (noise.value >= 1 && noise.value < 33) {

      page_images[1].src = "assets/icons/volume-level-1.svg"; 

    }

    else if (noise.value >= 33 && noise.value < 67) {

      page_images[1].src = "assets/icons/volume-level-2.svg"; 

    }

    else page_images[1].src = "assets/icons/volume-level-3.svg"; 
 
   });  



const play_sound = document.querySelector('button');
const audio_name = document.querySelector('audio');
console.log(audio_name);
  
play_sound.addEventListener('click', function(){
  
  if (horn.value != "select") {
    
    audio_name.src = "assets/audio/" + horn.value + ".mp3";
    audio_name.volume = noise.value/parseFloat(100);
        
    audio_name.play();
    
  }

 });  

}
