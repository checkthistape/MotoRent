/*$(function(){
$("#progressbar").progressbar({
	value: 0
});
$('#opros :radio').change(function() {
	
var chRadio = $('#opros :radio:checked').size();
$("#progressbar").progressbar({
   value: chRadio * 20
});
var questCount = $('#opros div[id*=radio]').size();
$('#aswerCount').text("Дано відповідей " + chRadio + " з " + questCount);
  });
});*/

$( function() { 
$( "#progressbar" ).progressbar({
value: 0     
}); 	
$('#opros :radio').change(function() {
var chRadio = $('#opros :radio:checked').size();
$("#progressbar").progressbar({ 
value: chRadio * 20 	
}); 
var questCount = $('#opros div[id*=radio]').size();
$('#aswerCount').text('Дано ответов ' + chRadio + ' из ' + questCount);
});
} );

