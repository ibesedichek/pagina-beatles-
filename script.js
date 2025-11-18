let reproduciendo = false;

function reproducirAudio(element) {
  const audioUrl = element.parentElement.getAttribute('data-audio');
  const audio = new Audio(audioUrl);
  audio.play();
}
