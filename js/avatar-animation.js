$(window).on('scroll', function () {

  var p = $('.flip-container');
  var offset = p.offset().top;
  var scrollTop = $(window).scrollTop()
  if (scrollTop > (offset - window.outerHeight/2)) {
    $( '.flipper' ).addClass("rotation");
  }
});