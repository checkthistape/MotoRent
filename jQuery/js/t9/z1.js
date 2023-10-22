$(function(){
	
var fontStateP = 0;
var fontStateM = 0;

 $(".btn-fs").click(function(){
	 var fontSize = parseInt($('body').css('font-size'));
	 
	 $("#bt1").click(function(){
		fontSize = fontSize + 1;
		$('body').css({'font-size':fontSize});
		fontStateP++;
     });
		if ($(this).hasClass('minus-font-size'))
	 	{
			fontSize = fontSize - 1 + "px";
			$('body').css({'font-size':fontSize});
			fontStateM++;
	 	}
		if ($(this).hasClass('normal-font-size'))
	 	{	
           if (fontStateP>0)
		   {
			   fontSize = fontSize - fontStateP + "px";
			   $('body').css({'font-size':fontSize});
		   }
		   if (fontStateM>0)
		   {
			   fontSize = fontSize + fontStateM + "px";
			   $('body').css({'font-size':fontSize});
		   }
     	}
 }) 
})
 
		 