$(document).ready( function () {

	function addItem () { //Adds new li (with <span>) to end of list.
		var itemName = document.getElementById("item_naming").value;
		console.log("itemName: "+itemName);
		if(itemName != ""){ // Prevents adding blank item.
		$("#main_list").append('<li class="not_purchased"><span></span></li>');
		$('li span').last().text(itemName);
		}
	}

	$("#add_button").on('click', function () { //Calls addItem when "Add Item" button clicked.
		addItem();
	});
	
	$("#item_naming").keypress(function (event) { //Calls addItem when ENTER pressed.
		if(event.which == 13) {
			addItem();
		}
	});
	
	$("#item_naming").on('focus', function () { //Clears input box when users clicks into it.
		$(this).val("");
	});
});