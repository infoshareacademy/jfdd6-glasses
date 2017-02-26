/**
 * Created by zieli on 24.02.2017.
 */

var currentSlide = 1;
showSlides(currentSlide);

function changeSlide(n) {
  showSlides(currentSlide += n);
}

function showSlides(n) {
  var i;
  var domElements = $('.flex-item');
  if (n > domElements.length) {
    currentSlide = 1
  }
  if (n < 1) {
    currentSlide = domElements.length
  }
  for (i = 0; i < domElements.length; i++) {
    domElements[i].style.display = "none";
    $('#slide'+[i+1]).removeClass("blink");
  }
  domElements[currentSlide - 1].style.display = "block";
  $('#slide'+[currentSlide]).addClass("blink");
}

window.onresize = function () {
  var domElements = $('.flex-item');
  for (var i = 0; i < domElements.length; i += 1) {
    domElements[i].style.display = "";
  }
};

window.onload = function () {
  var domElements = $('.flex-item');
  for (var i = 0; i < domElements.length; i += 1) {
    domElements[i].style.display = ""
  }
};