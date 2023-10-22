$(function(){
$( ".header" ).mouseenter(function(){
   $(".slide-text").slideUp("slow");
});
$( ".header" ).mouseleave(function(){
   $(".slide-text").slideDown("slow");
});
});