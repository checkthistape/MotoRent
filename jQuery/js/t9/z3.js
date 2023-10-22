$(function(){ 
$('nav').css("margin-right", "400px");
$('nav').animate({marginRight: '0px'}, 2000);
$('slide-text').hide();
$('slide-text').slideDown(1000);
$('h1').animate({fontSize:'70px'}, 2000);
$("slide-btn").animate({width: '550px', opacity: '0.8'}, 2000);
$(".slide-btn+span").animate({marginLeft: '500px'}, 1500);
$(".slide-btn+span").animate({marginLeft: '0px'}, 1000);
})