$(function(){
	
 var text1 = "Головна";
 var text2 = "Мотоцикли";
 var text3 = "Розпродаж";
 var text4 = "Форум";
 var text5 = "Контакти";
 var text6 = "Eng";
 
 var text1 = "Home";
 var text1 = "Motorcycles";
 var text1 = "Sale";
 var text1 = "Forum";
 var text1 = "Contacts";
 var text1 = "Ua";
 
 $('.m6').click(function(){ 
 
	if($('#p').text()!=text1)
	 $('#p').text(text1);
	else
	 $('#p').text(text2);
 });
});