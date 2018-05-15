function startPage(){
	var col1 = $("<div></div>").attr("id", "leftCol").text("Nav");
	var col2 = $("<div></div>").attr("id", "centerCol");
	var col3 = $("<div></div>").attr("id", "rightCol").text("Unit Stack");
	var gp = $("<div></div>").attr({ 
							"id": "gameScreenPad",
							"class": "test"
	}).html('GameScreen<br>');
	var cont = $("<div></div>").attr("id", "unitStack").text("Controller");
	var blah = $("<div></div").attr({
							"id": "blah",
							"class": "test"
				}).text("Unit Stack");
	var can = $("<canvas></canvas>").attr({
							"id": "gameScreen",
							"width": "580",
							"height": "380"
				}).text("Your browser does not support the canvas tag");
				
	$("main").append(col1, col2, col3);
	$("#centerCol").append(gp, cont);
	$("#gameScreenPad").append(can);
	// $("#rightCol").append(blah);
}

