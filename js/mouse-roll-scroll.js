//FULLSCREEN SCROLL//
$.scrollify({
  section : ".scrollify-section",
  sectionName : "section-name",
  interstitialSection : "",
  easing: "easeOutExpo",
  scrollSpeed: 1500,
  offset : -55,
  scrollbars: true,
  standardScrollElements: "",
  setHeights: true,
  overflowScroll: true,
  updateHash: true,
  touchScroll:false,
  before:function() {},
  after:function() {},
  afterResize:function() {},
  afterRender:function() {}
});