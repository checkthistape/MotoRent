$(function(){
$(".head-moto-img").click(function(){
	change_width(this);
})

function change_width(selectorObj)
{
	var width = $(selectorObj).width();
	var height = $(selectorObj).height()
	$(selectorObj).width(width/2).height(height/2);
}
})