// explore.js

window.addEventListener('DOMContentLoaded', init);
//const voices = window.speechSynthesis.getVoices();

setTimeout(() => {
  var voices = window.speechSynthesis.getVoices();
  populate_dropdown();
}, 50);

function populate_dropdown() {
  const dropdown = document.getElementsByName("voice");

   //console.log(voices.length);
    
    for(let i = 1; i <= voices.length; i++) {

      var option = document.createElement('option');
      
      option.value = voices[i];
      
      dropdown.append(option);

  
  }
  

}

function init() {
  // TODO


}

