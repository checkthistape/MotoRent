$(function() {
$( "#dialog" ).dialog({
autoOpen: false
});

$( "#my_button" ).on( "click", function(){
  var umovy = "";
  if ($("input[type='checkbox']").eq(0).prop('checked')==true)
  {
    umovy+="Шолом: так<br>";
  }
  if ($("input[type='checkbox']").eq(1).prop('checked')==true)
  {
    umovy+="Багажник: так<br>";
  }
  if ($("input[type='checkbox']").eq(2).prop('checked')==true)
  {
    umovy+="Мото-одяг: так<br>";
  }
  if ($("#inch_yes").prop('checked')==true)
  {
    umovy+="Страхування: так<br>";
  }
  else
  {
    umovy+="Страхування: ні<br>";
  }
  
  $( "#dialog" ).html(
    $('#motoSelect option:selected').text()+"<br>"+
  $('#custom-handle').text()+" мотоциклів"+"<br>"+
  "на "+days+" дні"+"<br>"+
  "Запланована відстань: "+$("amount").val()+"<br>"+
  "Область: "+$("#tags").val()+"<br>"+
  umovy
    );
  
  var value = $("#progressbar").progressbar("value");
  if (value<100){
    alert("Необхідно пройти обов'язкове тестування!");
  }
  else if (value==100) {
    $( "#dialog" ).dialog( "open" ) ;
  }
});
})