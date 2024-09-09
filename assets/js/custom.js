function fadeOutPreloader(t, e) {
  (opacity = 1),
    (interval = setInterval(function () {
      opacity <= 0
        ? ((t.style.zIndex = 0),
          (t.style.opacity = 0),
          (t.style.filter = 'alpha(opacity = 0)'),
          (document.documentElement.style.overflowY = 'auto'),
          document.getElementById('preloader').remove(),
          clearInterval(interval))
        : ((opacity -= 0.1),
          (t.style.opacity = opacity),
          (t.style.filter = 'alpha(opacity = ' + 100 * opacity + ')'));
    }, e));
}
setTimeout(function () {
  fadeOutPreloader(document.getElementById('preloader'), 69);
}, 1500),
  $(document).ready(function () {
    $(window).on('beforeunload', function () {
      window.scrollTo(0, 0);
    }),
      particlesJS.load('landing', 'assets/particles.json', function () {});
    var t = document.getElementById('txt-rotate'),
      e = t.getAttribute('data-rotate'),
      i = t.getAttribute('data-period'),
      n =
        (setTimeout(function () {
          new TxtRotate(t, JSON.parse(e), i);
        }, 1500),
        document.createElement('style'));
    (n.type = 'text/css'),
      (n.innerHTML = '#txt-rotate > .wrap { border-right: 0.08em solid #666 }'),
      document.body.appendChild(n),
      AOS.init({
        disable: 'mobile',
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
        once: !0,
      }),
      randomizeOrder();
  });

$(document).ready(function () {
  //$('.styles-Modal').hide();
  $('#countryLangDd').click(function () {
    if ($('#caret-arrow').hasClass('styles-activeCaret')) {
      $('#caret-arrow').removeClass('styles-activeCaret');
      $('.styles-Modal').hide();
      console.log('if');
    } else {
      console.log('else');
      $('.styles-Modal').show();
      $('#caret-arrow').addClass('styles-activeCaret');
    }
    // add styles-activeCaret
    //.addClass("styles-activeCaret");
  });
});
