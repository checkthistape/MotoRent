$(function(){
	$("#my_button").click(function(){
		var moto = parseInt($('#motoSelect option:selected').val());
		var days = parseInt($('#daysSelect option:selected').text());
		var count = parseInt($('#email').val());
		
		var helmet = 0;
		var bag = 0;
		var cl = 0;
		var inch = 0;
		
		if ($("input[type='checkbox']").eq(0).prop('checked')==true)
		{
			helmet = parseInt($("input[type='checkbox']").eq(0).val());
		}
		if ($("input[type='checkbox']").eq(1).prop('checked')==true)
		{
			bag = parseInt($("input[type='checkbox']").eq(1).val());
		}
		if ($("input[type='checkbox']").eq(2).prop('checked')==true)
		{
			cl = parseInt($("input[type='checkbox']").eq(2).val());
		}
		if ($("#inch_yes").prop('checked')==true)
		{
			inch = parseInt($("#inch_yes").val());
		}
		else
		{
			inch = parseInt($("#inch_no").val());
		}

		var sum =(moto+helmet+bag+cl+inch)*days*count;
		$('#mytextarea').text("Сума вашого замовлення:"+sum+"$");
        })
})