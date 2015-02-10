function draw_board(x,y){
	var count=0;
	var $container = $("<div></div>").css("float","left");

	for(var i = 0; i < x; i++) {
	    for (var j = 0; j < y; j++){
	        $("<div id="+(j+1+count)+"></div>").addClass("box").appendTo($container);
	    }
	    count+=40;
	    $("<div id="+(i+1)+"></div>").css("clear", "both").appendTo($container);
	}

	$container.appendTo($("#content"));
}


$(document).ready(function() {
	draw_board(40,40);
});