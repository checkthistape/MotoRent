$(function(){
$("#div_form_2>p>strong").first().text("Кількість:")
$("#email").val(" ")
$('#email').bind("change keyup input click", function() {
  if (this.value.match(/[^0-9]/g))
  {
  this.value = this.value.replace(/[^0-9]/g, '');
  }

$("#div_form_2>p>strong").first().text("Кількість товару:"+ this.value)
})
})
		
		
		
		
