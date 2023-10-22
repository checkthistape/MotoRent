$(function(){ 
$('#my_form').click(function(){
	getInfoMoto();
})
function getInfoMoto()
{
	var moto=$('#motoSelect option:selected').text();
	var days=$('#daysSelect option:selected').text();
	var email=$('#email').val();
	var shlem="";
	var bag="";
	var od="";
	var inch="";

if($("input[type='checkbox']").eq(0).prop('checked')==true)
{
	shlem=$("label[for='shlem']").text();
}
if ($("input[type='checkbox']").eq(1).prop('checked')==true)
{
	bag=$("label[for='bag']").text();
}
if ($("input[type='checkbox']").eq(2).prop('checked')==true)
{
	od=$("label[for='bag']").text();
}

if ($("#inch_yes").prop('checked')==true)
{
	inch="Так";
}
else
{
	inch="Ні";
}
$('textarea').text(moto+" на "+days +" днів\n"+email+"\nАксесуари: "+shlem+" "+bag+" "+od+"\nСтраховка: "+inch);
}
})

