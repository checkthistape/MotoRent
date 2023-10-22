$(function(){

$('.head-moto-img').click(function(){
var width = $(this).width();
var height = $(this).height();
var title = $(this).attr('title');

if ($(this).attr('title')==''){
$(this).width(width/1.5).height(height/1.5);
$(this).attr('title',1);

}
else {
	$(this).width(width*1.5).height(height*1.5);
	$(this).attr('title','');
    }	
	
})	
})