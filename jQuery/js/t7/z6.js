$(function(){
$('#radio').css("background-color", "red");
$('#my_form').click(function()
{
	if($("#inch_yes").prop('checked')==true)
{
$('#radio').css("background-color", "#f6f6f6");	
}
else
{
$('#radio').css("background-color", "red");	
}
})	
})
