console.log('hero.js is available');
function Hero(id,me,x,y,w,h,left,up,right,down,attk1,attk2,attk3){
	this.id = id; //refers to the id used to create sprite based on main menu selection
	doc.body.innerHTML = "<div id='" + this.id + "'></div>";

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


function attack_characters(hero_object,e,attk1,attk2,attk3){
	if(e === attk1){ hero_object.me.className = 'insert name here'; }
	//this will be hard to make dynamic because its different classes for different character
	//however I can likely use another function to check the hero_object.me.id and assign classes based on ids. 

}