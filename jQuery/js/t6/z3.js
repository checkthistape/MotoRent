$(function(){
change_width(".head-moto-img", 200);
change_width(".slide-btn", 100);

function change_width(selectorObj, w)
{
	var oldW = $(selectorObj).width();
	var rizn = w - oldW;
	$(selectorObj).width(w).height($(selectorObj).height()+rizn);
}
})