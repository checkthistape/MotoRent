/*
$(function(){
	$(".container").click(function(){
	$(this).text("Ви обрали:");
	});
}) 
*/
$(function(){
$(".head-moto-img").click(function(){
   $('+h3>a',this).html(function(i, origText){
       return "Ви обрали: <br><br>" + origText;
   });
})
})