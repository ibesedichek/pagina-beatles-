let reproduciendo = false;
let audio;

function reproducirAudio(element) {
  const audioUrl = element.parentElement.getAttribute('data-audio');
  if(!reproduciendo) {
    if (!audio || audio.src !== audioUrl){
      audio = new Audio(audioUrl);
    }
    audio.play();
    reproduciendo = true;
  }
  else {
    if (audio){
      audio.pause();
      reproduciendo = false;
    }
  }
}