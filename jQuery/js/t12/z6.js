$(function(){
$("#progressbar").bind('progressbarchange', function(event, ui) {
  var selector = "#" + this.id + " > div";
      var value = this.getAttribute( "aria-valuenow" );
    if (value < 50){
      $(selector).css({ 'background': 'Red' });
    }
    else if (value >= 60 && value < 100){
      $(selector).css({ 'background': 'Yellow' });
    }
    else if (value == 100){
      $(selector).css({ 'background': 'Green' });
    }
});
})