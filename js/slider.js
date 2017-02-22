/**
 * Created by zieli on 17.02.2017.
 */

var el = document.getElementById('slide1');

var i = 0;
var slideLeft = function () {
  i += 1;
  console.log(i);
  console.log(el);
  if (i > 0 && i < 4) {
    el.style.marginLeft = "-" + i + "00%";
  }
  if (i >= 4 || i < 0) {
    i = 0;
    el.style.marginLeft = "0";
  }
};

var slideRight = function () {
  console.log(i);
  console.log(el);
  i -= 1;
  if (i > 0 && i < 4) {
    el.style.marginLeft = "-" + i + "00%";
  }
  if (i <= 0) {
    i = 4;
    el.style.marginLeft = "0";

  }
  return i;
};

window.onresize = function () {
  el.style.marginLeft = "0"
};