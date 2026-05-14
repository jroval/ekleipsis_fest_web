/* ── CARRUSELES GLAMPING ────────────────────────────────────── */
document.querySelectorAll('.glamp-carousel').forEach(function(carousel) {
  var track   = carousel.querySelector('.glamp-carousel-track');
  var slides  = carousel.querySelectorAll('.glamp-carousel-slide');
  var dots    = carousel.querySelectorAll('.glamp-dot');
  var btnPrev = carousel.querySelector('.glamp-carousel-prev');
  var btnNext = carousel.querySelector('.glamp-carousel-next');
  var total   = slides.length;
  var current = 0;
  var timer   = null;
  var startX  = 0;

  function goTo(index) {
    current = (index + total) % total;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    dots.forEach(function(d, i) { d.classList.toggle('active', i === current); });
  }

  function startAuto() { timer = setInterval(function() { goTo(current + 1); }, 4500); }
  function stopAuto()  { clearInterval(timer); }

  btnNext.addEventListener('click', function() { stopAuto(); goTo(current + 1); startAuto(); });
  btnPrev.addEventListener('click', function() { stopAuto(); goTo(current - 1); startAuto(); });
  dots.forEach(function(dot, i) {
    dot.addEventListener('click', function() { stopAuto(); goTo(i); startAuto(); });
  });

  carousel.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
    stopAuto();
  }, { passive: true });

  carousel.addEventListener('touchend', function(e) {
    var diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
    startAuto();
  }, { passive: true });

  carousel.addEventListener('mouseenter', stopAuto);
  carousel.addEventListener('mouseleave', startAuto);

  startAuto();
});