$(function(){
 var text1 = "Подивитись фото";
 var text2 = "Сховати фото";
 $('#p').click(function(){
	$(".head-moto-img").slideToggle();
	if($('#p').text()!=text1)
	 $('#p').text(text1);
	else
	 $('#p').text(text2);
 });
});