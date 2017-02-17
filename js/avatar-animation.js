$(window).on('scroll', function () {

  var p = $('#container_section_3');
  var offset = p.offset().top;
  var scrollTop = $(window).scrollTop()
  if (scrollTop > (offset - window.outerHeight/2)) {
    $( '.person' ).addClass("person-back");
  }
});