$(function(){
$('#slider-range').slider({
range: true,
min: 10,
max: 1000, 
values: [50, 400],
slide: function(event, ui) {
$('#amount').val(ui.values[0] + " - " + ui.values[1] + " км");
}
});
$('#amount') .val($('#slider-range').slider('values', 0) + ' - ' + $('#slider-range').
slider('values', 1) + " км");
});
