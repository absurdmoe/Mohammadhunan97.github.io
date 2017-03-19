console.log('hero.js is available');
let myHero;
function Hero(id,x,y,index){
	this.id = id;
	myHero = doc.make('div');
	doc.body.appendChild(myHero);
	myHero.id = this.id;
	this.me = doc.getByID(id);
	this.x = x || 0;
	this.y = y || 0;
	this.me.style.top = y + 'px';
	this.me.style.left = x + 'px';
	this.stamina_points = 400;
	this.health_points = 100;
	this.me.health = doc.getByTag('h1',index);
	this.me.stamina = doc.getByTag('h2',index);

	this.move = function(hero_object,a,b,c,d){ /*keys you want to move*/
		window.addEventListener('keydown',function(e){
			move_characters(hero_object,e.code,a,b,c,d);
		});
	}
	this.attack = function(hero_object,attk1,attk2,attk3,attk4,attk5){
		window.addEventListener('keydown',function(e){
			if(e.code === attk1){
				punch_one(hero_object);
			}
			if(e.code === attk2){
				punch_two(hero_object);
			}
			if(e.code === attk3){
				kick_one(hero_object);
			}
			if(e.code === attk4){
				kick_two(hero_object);
			}
			if(e.code === attk5){
				console.log('hadoken!!!');
				hadoken(hero_object);
			}
		});
	}
}


