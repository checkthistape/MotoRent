$(function(){

$('.head-moto-img').hover(function(){
var width = $(this).width();
var height = $(this).height();
var title = $(this).attr('title');

if ($(this).attr('title')==''){
$(this).width(width/2).height(height/2);
$(this).attr('title',1);

}
else {
	$(this).width(width*2).height(height*2);
	$(this).attr('title','');
    }	
	
})	
})