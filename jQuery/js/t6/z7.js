$(function(){
$(".head-moto-img").mouseover(function(){
	change_width_b(this);
	
})

function change_width_b(selectorObj)
{
	var width = $(selectorObj).width();
	var height = $(selectorObj).height()
	$(selectorObj).width(width*1.5).height(height*1.5);
}
$(".head-moto-img").mouseout(function(){
	change_width_s(this);
})
function change_width_s(selectorObj)
{
	var width = $(selectorObj).width();
	var height = $(selectorObj).height()
	$(selectorObj).width(width/1.5).height(height/1.5);
}
})
