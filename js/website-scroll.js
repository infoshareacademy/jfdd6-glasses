$('a[href^="#"]').on('click',function (event) {
  var hash = this.hash;
  var $target = $(hash);
  var $topOffset = 0;

  event.preventDefault();

  $('html, body').stop().animate(
    {'scrollTop': $target.offset().top - $topOffset},
    900,
    'swing',
    function () {
        window.location.hash = hash;
    });
});
