$(function(){
$('.head-moto-img').click (function(){
$('.koshik-wrapper').append ($(this).clone ().dblclick (function(){
$(this).remove ();
Vsiogo();
}) ) ;
Vsiogo();
})

function Vsiogo (){
var count = 0;
var suma = 0;
$('.koshik-wrapper>.head-moto-img').each(
function (){
count++ ;
suma+=parseInt($(this).attr ('price'));
}
)
$('#suma').html ("Всього <strong> "+count+ " </strong> мотоциклів на суму <strong>"+suma+" </strong> UAH");

if(count>0)
$(".koshik-wrapper").addClass("full-koshik");
else
$(".koshik-wrapper").removeClass("full-koshik");

}
})