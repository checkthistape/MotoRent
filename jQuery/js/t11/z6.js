$(function(){
var circle = $("#circle");
$("#radius").selectmenu({
	change: function(event, data) {
		circle.css({ 
		width:  data.item.value,
		});
		
		circle.css({ 
		height: data.item.value
		});
	}
});

$("#color").selectmenu({
	change: function( event, data) {
		circle.css("background", data.item.value);
	}
});

$('#shlem_form').hide();
$('#innerfieldset').click(function () {
if ($("input [type='checkbox']").eq(0).prop('checked')==true)
{
$('#shlem form').show();
}
else { 

$('#shlem form').hide();
}
})
})