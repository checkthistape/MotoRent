$(function(){

$('.head-moto-img').hover(
  function()
  {
     size_obj(this);
  },
  function()
  {
     $('#p1').text();
  }
)
$('#about-moto').hover(
  function()
  {
     size_obj(this);
  },
  function()
  {
     $('#p1').text();
  }
)

function size_obj(selectorObj) {
   var alt = $(selectorObj).attr('alt');
   var width = $(selectorObj).width();
   var height = $(selectorObj).height();

   $('#p1').text("Об'єкт - "+alt+". Його ширина = "+width+"px, висота = "+height+"px");
}
})	
