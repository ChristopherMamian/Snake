SNAKE = [];

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

function draw_snake(){
	//initialize the snake close to center
	$("#content").find("#580").addClass("snakeHead");
	//initialize snake with length of 3
	$("#content").find("#579").addClass("snake");
	$("#content").find("#578").addClass("snake");

	//push divs into SNAKE array
	SNAKE.push(578);
	SNAKE.push(579);
	SNAKE.push(580);
}


$(document).ready(function() {
	draw_board(40,40);
	draw_snake();
});