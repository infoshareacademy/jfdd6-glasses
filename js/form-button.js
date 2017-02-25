/**
 * Created by zemr on 23.02.17.
 */


var mq = window.matchMedia('(min-width: 993px)');
var $emailError = $('.email-error');

$('.enrollment-form').submit(function(event) {
  event.preventDefault();
  var $email = $('input[name="email"]').val();

  if(!validate($email)) {
    if ($emailError) { $('.email-error').remove(); }
    $('#info').append($('<p class="email-error">').text("Podany adres mailowy jest niepoprawny."));
  } else {
    if (mq.matches) {
      $('.section2').css("display", "none");
      $('.game').css("display", "flex");
    } else {
      $('.section2').css("display", "none");
      $('.thanks').css("display", "flex");
    }

    mq.addListener(function(changed) {
      /* only if exit function wasn't used */
      if ($('.game').css("display") !==  $('.thanks').css("display")) {
        if (changed.matches) {
          // the width of browser is more then 993px
          $('.thanks').css("display", "none");
          $('.game').css("display", "flex");
        } else {
          // the width of browser is less then 993px
          $('.game').css("display", "none");
          $('.thanks').css("display", "flex");
        }
      }
    });
  }
});

function validate(email) {
  var pattern = /^\S+@\S+[\.][0-9a-z]+$/;
  return pattern.test(email);
}

if ($emailError) {
  $('input[name="email"]').focusin(function() {
    $('.email-error').remove();
  });
}

/* exit function for .game and .thanks */
$('.exit-game').click(function() {
  $('.thanks').css("display", "none");
  $('.game').css("display", "none");
  $('.section2').css("display", "flex");
  $('#before-start').css("display", "block");
  $('input[name="email"]').val('');
});
