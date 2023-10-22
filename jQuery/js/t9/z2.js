$(function(){ 
$(".head-moto-img+h3+p").hide();
$(".head-moto-img").hover(
       function()
	   {
		   $('+h3+p', this).slideDown();
	   },
	   function()
	   {
		   $('+h3+p', this).slideUp();
	   })

})