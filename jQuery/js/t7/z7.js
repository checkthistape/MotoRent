$(function(){
var x = $('#email').val();
var pos = x.indexOf("Приклад");
console.log(pos);

if(pos>=0)
{
$('#email').css("background-color", "red");
	
}

else (pos<=0)
{
$('#email').css("background-color", "green");	
}
})