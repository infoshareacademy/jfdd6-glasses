/**
 * Created by mtr on 2017-02-16.
 */

$(document).ready(function(){
  $('a[href^="#"]').on('click',function (event) {
    event.preventDefault();

    var $target = $(this.hash);
    var $topOffset = 0;

    $('html, body').stop().animate(
      {'scrollTop': $target.offset().top - $topOffset},
      900,
      'swing',
      function () {
          window.location.hash = target;
      });
  });
});

/*
* Attribute starts with selector [name^=”value”]-------------------
* Selects elements that have the specified
* attribute with a value beginning exactly with a given string.
*
* event.preventDefault()-------------------
* If this method is called,
* the default action of the event will not be triggered.
* For example, clicked anchors will not take the browser to a new URL.
*
* hash-----------------
* hash returns the part of the URL that follows
* the # symbol, including the # symbol.
*
* stop-------------------------
* Stop the currently-running animation on the matched elements.
*
* animate-----------------------
* .animate( properties [, duration ] [, easing ] [, complete ] )
*
* .offset() --------------------
* Get the current coordinates of the first element, or set the
* coordinates of every element, in the set of matched
* elements, relative to the document.
*
* [complete] ----------------
* A function to call once the animation is complete,
* called once per matched element.
* window.location.hash = anchor
* */
