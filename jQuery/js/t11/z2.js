$(function(){
$('#clear_form').click( function(event) {
	$('#div_form_1 input[type=checkbox]').removeAttr(
	'checked');
	$('#div_form_1 input[type=radio]').removeAttr('checked');
	$('input[type=text], textarea').val('');
	event.preventDefault();
})
});