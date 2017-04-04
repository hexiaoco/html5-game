var spriteSheet = new function(){
	this.map = {};
	this.load = function(callback){
		this.map = {
			ship: {sx:0, sy:0, w:38, h:42, frames:3}
		};
		this.image = new Image();
		this.image.onload = callback;
		this.image.src = 'images/sprites.png';
	};
	this.draw = function(ctx, sprite, x, y, type){
		var s = this.map[sprite];
		if(!type){
			type = 1;
		}
		switch(type){
			case 1:
				s.sx = 0;
				s.w = 38;
				break;
			case 2:
				s.sx = 37;
				s.w = 42;
				break;
			case 3:
				s.sx = 79;
				s.w = 37;
				break;
			case 4:
				s.sx = 116;
				s.w = 43;
				break;
			case 5:
				s.sx = 159;
				s.w = 33;
				break;
			default:
				s.sx = 0;
				s.w = 38;
		}

		ctx.drawImage(this.image, s.sx, s.sy, s.w, s.h, x, y, s.w, s.h);
	};
}