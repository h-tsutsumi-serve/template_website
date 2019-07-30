$(window).on('load', function () {

  //navi
  var current = false;
  var $gBtn = $('#js-gnavMenu');
  var $gNav = $('#js-gnav');
  var $mainContents = $('main');

  $('#js-gnav a[href^="#"]').click(function () {
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;

    $gNav.stop().removeClass('is-enable');
    $gBtn.removeClass('is-close');
    current = false;

    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });

  //sp
  $gBtn.on('click', function () {
    if (current == false) {
      current = true;
      if (!$(this).hasClass('is-close')) {
        $gNav.stop().addClass('is-enable');
        $gBtn.addClass('is-close');
        current = false;
      } else {
        $gNav.stop().removeClass('is-enable');
        $gBtn.removeClass('is-close');
        current = false;
      }
    } else {
      return false;
    }
  });

  //pc
  var GT = $gNav.offset().top;

  function headerFixed() {
    var ST = $(window).scrollTop();
    var GH = $gNav.innerHeight();

    if (ST > GT) {
      $gNav.addClass('is-fixed');
      $mainContents.css({
        'margin-top': GH + 'px'
      });

    } else {
      $gNav.removeClass('is-fixed');
      $mainContents.css({
        'margin-top': 0
      });
    }
  }
  headerFixed();

  $(window).on('scroll resize', function () {
    headerFixed();
  });


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
      $pagetop.css({
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
        $pagetop.fadeOut(200);
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
