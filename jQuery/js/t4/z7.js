/*
$(function(){
	$(".container").click(function(){
	$(this).text("Ви обрали:");
	});
}) 
*/
$(function(){
$(".head-moto-img").click(function(){
   $('+h3>a',this).text(function(i, origText){
       return "Ви обрали: " + origText;
   });
})
})