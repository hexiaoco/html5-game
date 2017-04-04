var canvas = document.getElementById('game');
var ctx = canvas.getContext && canvas.getContext("2d");

if(!ctx) {
	alert("Please update your browser")
} else {
	startGame();
}

//version 1
// function startGame(){
// 	ctx.fillStyle = "#ffff00";
// 	ctx.fillRect(50, 100, 380, 400);
// 	ctx.fillStyle = "rgba(0, 0, 128, 0.5)";
// 	ctx.fillRect(0, 50, 380, 400);

// 	var img = new Image();
// 	img.onload = function(){
// 		// ctx.drawImage(img, 100, 100);
// 		// ctx.drawImage(img, 100, 100, 200, 200);	//缩放
// 		ctx.drawImage(img, 0, 0, 37, 42, 100, 100, 37, 42);
// 	}
// 	img.src = "images/sprites.png";
// }

//version2: 2017-04-04
function startGame(){
	spriteSheet.load(function(){
		// alert('running in callback...');
		spriteSheet.draw(ctx, "ship", 100,300);
		spriteSheet.draw(ctx, "ship", 100, 50,3);
		spriteSheet.draw(ctx, "ship", 150, 100, 4);
		spriteSheet.draw(ctx, "ship", 200,30,2);
	});
}