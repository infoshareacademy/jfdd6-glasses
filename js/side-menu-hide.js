/* JQuery version */
$('#checkbox').click(function (event) {
  event.stopPropagation();
});

$('body').click(function (event) {
  $('#checkbox').prop('checked', false);
});


/* JS version */
/*var checkbox = document.getElementById('checkbox');
checkbox.onclick = function (event) {
  event.stopPropagation();
};

document.body.onclick = function () {
  checkbox.checked = false;
};*/


