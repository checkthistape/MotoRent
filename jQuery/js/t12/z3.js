$(function(){
$('#to').change(function () {
var Datel = new Date ($('.datepicker:first').val()); 
var Date2 = new Date ($('.datepicker:last').val());
var Days = Math.floor(((Date2.getTime() - Date1.getTime())/(1000*60*60*24))+1);

days = Days;

S('#mytextarea').text(function(i,origText) {
return Days + " днів" + "\n" + origText;
})
})
});