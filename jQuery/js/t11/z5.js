
$.widget("custom.iconselectmenu1", $.ui.selectmenu, {
_renderItem: function(ul, item) {
	var li = $("<li>"),
	wrapper = $("<div>", {text: item.label});
	
	if (item.disabled) {
		li.addClass("ui-state-disabled");
	}
	
	$("<span>", {
		style: item.element.attr("data-style"),
		"class": "ui-icon "+ item.element.attr("data-class")
	}).appendTo(wrapper);
	
	return li.apend(wrapper).appendTo(ul);
    }
});

$('#motoSelect').iconselectmenu1().iconselectmenu1("menuWidget").addclass("ui-menu-icons customicons");