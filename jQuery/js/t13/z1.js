$(function() {
$( "#dialog" ).dialog({
autoOpen: false
});

$( "#my_button" ).on( "click", function() {
$( "#dialog" ).dialog( "open" );
});
})