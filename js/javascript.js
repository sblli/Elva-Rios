const cards = document.querySelectorAll('.portafolio-card');

cards.forEach(card => {
    const video = card.querySelector('.portafolio-video');
    const btn = card.querySelector('.btninicio');
    const overlay = card.querySelector('.overlay-video');

    btn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            overlay.style.opacity = "0";
        } else {
            video.pause();
            overlay.style.opacity = "1";
        }
    });

    card.addEventListener('mouseleave', () => {
        video.pause();
        overlay.style.opacity = "1";
    });
});

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
