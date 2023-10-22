$(function(){
$(".head-moto-img").click(function(){
	var obj = $(this);
	obj.animate({height: '300px', opacity: '0.4'}, 1000);
	obj.animate({width: '300px', opacity: '0.8'}, 1000);
	obj.animate({height: '100px', opacity: '0.4'}, 1000);
	obj.animate({width: '100px', opacity: '0.8'}, 1000);
})
})


