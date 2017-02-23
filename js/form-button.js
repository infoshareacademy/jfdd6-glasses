/**
 * Created by zemr on 23.02.17.
 */

var $emailError = $('.email-error');

$('.enrollment-form').submit(function(event) {
  event.preventDefault();
  var $email = $('input[name="email"]').val();

  if(!validate($email)) {
    if ($emailError) { $('.email-error').remove(); }
    $('#info').append($('<p class="email-error">').text("Podany adres mailowy jest niepoprawny."));
  } else {
    $('.section2').css("display", "none");
    $('.game').css("display", "flex");
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
