// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();




function init() {

  const horn = document.querySelector('#horn-select'); 
  const sound = document.getElementsByTagName("audio");
  const page_images = document.getElementsByTagName("img");
      
  horn.addEventListener('click', function(){
  
   if (horn.value != "select") {
     page_images[0].src = "assets/images/" + horn.value + ".svg"; 

     sound.src = "assets/audio/" + horn.value + ".mp3";
    
    }

  });  

  const noise = document.getElementById('volume');
  

  noise.addEventListener('change', function(){
    
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

  
play_sound.addEventListener('click', function(){
  
  if (horn.value != "select") {
    
    audio_name.src = "assets/audio/" + horn.value + ".mp3";
    
    audio_name.volume = noise.value/parseFloat(100);

    if(horn.value == "party-horn" && noise.value != 0) {

      jsConfetti.addConfetti();

    }
        
    audio_name.play();
    
  }

 });  

}
