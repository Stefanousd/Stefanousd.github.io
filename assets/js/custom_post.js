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

$(window).scroll(function () {
  if ($(window).scrollTop() >= $('.styles-NavigationContainer').height()) {
    $('#nav-transparent').addClass('styles-visible');
    $('#nav-transparent').removeClass('styles-transparent');
  } else {
    $('#nav-transparent').addClass('styles-transparent');
    $('#nav-transparent').removeClass('styles-visible');
  }
});
