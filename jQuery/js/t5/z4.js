$(function(){
$('.head-moto-img').click(function(){
      $(this).clone().prependTo(".koshik-wrapper");
	  $(".koshik-wrapper").addClass("full-koshik");
	  
    })
});