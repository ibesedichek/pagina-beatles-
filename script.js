document.addEventListener('DOMContentLoaded', function() {
  const player = document.getElementById('player');


  document.querySelectorAll('.vinilo').forEach(vinilo => {
    vinilo.addEventListener('click', () => {
      const audioSrc = vinilo.getAttribute('data-audio');
      if (!audioSrc) return;


      // Si ya está otro audio cargado distinto, reiniciar
      if (player.src !== audioSrc) {
        player.src = audioSrc;
      }
      player.play().catch(err => {
        console.log('Error al reproducir audio:', err);
      });
    });
  });
});