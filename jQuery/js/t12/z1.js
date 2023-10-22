$(function(){
var handle = $("#custom-handle");
$( "#slider" ).slider({
create: function() {
handle.text( $( this ).slider( "value" ) );
},
slide: function( event, ui ) {
handle.text( ui.value );

$('#mytextarea').text(ui.value + " мотоциклів");
}
});
})