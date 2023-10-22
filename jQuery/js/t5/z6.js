$(function(){
$('.head-moto-img').click(
function(){ 
var n=$(this);
$(".koshik-wrapper-items").each(
function(){
if(n.attr('nomer')==$(this).attr('nomer'))
{
$(this).html(n.clone());
n.remove();
$(".koshik-wrapper").addClass("full-koshik");
}
}
)
}
)
})
 
