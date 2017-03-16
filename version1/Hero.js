console.log('hero.js is available');
function Hero(me,x,y,w,h,left,up,right,down,attk1,attk2,attk3){
	this.me = doc.getByID(me); //me refers to the dom elements id
	this.x = x || 0;
	this.y = y || 0;
	this.w = w || 100;
	this.h = h || 100;
	this.me.style.top = y + 'px';
	this.me.style.left = x + 'px';
	/* CLOSURE, and Objects on steroids */
	this.move = function(hero_object,a,b,c,d){ /*keys you want to move*/
		window.addEventListener('keydown',function(e){
			move_characters(hero_object,e.code,a,b,c,d);
		});
	}
	this.attack = function(attk1,attk2,attk3){
		window.addEventListener('keydown',function(e){
			attack_characters(hero_object,e.code,attk1,attk2,attk3);
		});
	}
}








