$(window).on('load', function () {
  //pagetop
  var $pagetop = $('#js-pagetop');
  var $footer = $('footer');

  function footerPageTop() {
    var ST = $(window).scrollTop();
    var WH = $(window).height();
    var FT = $footer.offset().top;
    var FH = $footer.innerHeight();

    var flag = ST + WH > FT;

    if (flag) {
      $pagetop.stop().css({
        'display': 'block',
        'position': 'absolute',
        'bottom': FH + 15 + 'px'
      });
    } else {
      if (ST > 150) {
        $pagetop.css({
          'position': 'fixed',
          'bottom': '15px'
        }).fadeIn(200);
      } else {
        $pagetop.stop().fadeOut(200);
      }
    }
  }
  footerPageTop();

  $(window).on('scroll resize', function () {
    footerPageTop();
  });

  $pagetop.click(function () {
    $('body, html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });


  //sp tel link
  if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
    $('.js-tel').each(function () {
      var str = $(this).html();
      if ($(this).children().is('img')) {
        $(this).html($('<a>').attr('href', 'tel:' + $(this).children().attr('alt').replace(/-/g, '')).append(str + '</a>'));
      } else {
        $(this).html($('<a>').attr('href', 'tel:' + $(this).text().replace(/-/g, '')).append(str + '</a>'));
      }
    });
  }
});
