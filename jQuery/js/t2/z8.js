$(function(){
	zgor("#home", 2000, 6000);
	function zgor(name_obj, t1, t2){
	obj=$(name_obj);
	t1=t1;
	t2=t2;
	
	obj.fadeOut(t1);
	obj.slideUp(t1);
	obj.slideDown(t2);
	obj.fadeIn(t2);
    }
});
