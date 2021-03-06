$(document).ready( function () {

	function addItem () { //Adds new li (with <span>) to end of list.
		var itemName = document.getElementById("item_naming").value;
		console.log("itemName: "+itemName);
		if(itemName != ""){ // Prevents adding blank item.
		$("#main_list").append('<li class="not_purchased"><span></span></li>');
		$('li span').last().text(itemName);
		}
	}

	$("#add_button").on('click', function () { //Calls addItem when "Add Item" button clicked, and then clears input box. 
		addItem();
		$("#item_naming").val("");
	});
	
	$("#remove_button").on('click', function () {
		$(".purchased").remove();
	});
	
	$("#item_naming").keypress(function (event) { //Calls addItem when ENTER pressed, then clears input box.
		if(event.which == 13) {
			addItem();
			$(this).val("");
		}
	});
	
	$("#item_naming").on('focus', function () { //Clears input box when users clicks into it.
		$(this).val("");
	});
	
	$("ul#main_list").delegate("li", "click", function () { //Event handler so that clicking current and future <li> changes class to purchased.
		console.log("Delegate function fired!");
		$(this).removeClass("not_purchased").addClass("purchased");
	});
});