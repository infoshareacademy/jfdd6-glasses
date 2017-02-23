/**
 * Created by zemr on 23.02.17.
 */


$('.enrollment-form').submit(function(event) {
  $('.section2').css("display", "none");
  $('.game').css("display", "flex");
  event.preventDefault();
});