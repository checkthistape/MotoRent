$(function(){
var a = "Розгорнути фото";
var b = "Сховати фото";
$('#p').click(function(){
$('.features-grids').slideToggle();
if($('#p').text!=a){ $('#p').text(a); }
else{ $('#p').text(b); }

})
})

