$(function() {
$("#dialog").dialog({
autoOpen: false,
show: {
effect: "blind",
duration: 1000
},
hide: {
effect: "explode",
duration: 1000
}
});

$("#my_button").on("click", function() {
$("#dialog").dialog("open");
})
});