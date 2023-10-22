$(function(){
$('.contatct-active').click(function(){
  if($('.m6>a').text()=="eng")
{
$('.m1>a').text('Home');
$('.m2>a').text('Motorcycles'); 
$('.m3>a').text ('Sale') ;
$('.m4>a').text('Forum');
$('.m5>a').text('Contacts');
$('.m6>a').text('ua');
}
else
{
$('.m1>a').text ('Головна');
$('.m2 >a').text('Мотоцикли');
$('.m3>a').text('Розпродаж');
$('.m4>a').text('Форум');
$('.m5>a').text('Контакти');
$('.m6>a').text('eng');
}
})
})