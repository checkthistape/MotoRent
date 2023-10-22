$(function(){
	zr("#fea", 2000, 1000);
	function zr(name_obj, t1, t2){
	obj=$(name_obj);
	t1=t1;
	t2=t2;
	obj.slideUp(t1);
	obj.slideDown(t2);
    }
});