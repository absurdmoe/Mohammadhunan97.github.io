console.log('hero.js is available');
let myHero;
function Hero(id,me,x,y,w,h){
	this.id = id; //refers to the id used to create sprite based on main menu selection
//	doc.body.innerHTML += " <div id='" + this.id + "'></div>"; /*needs to be += or else
//	it will delete the entire doc */
	myHero = doc.make('div');
	doc.body.appendChild(myHero);
	myHero.id = this.id;
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
	this.attack = function(hero_object,attk1,attk2,attk3,attk4,attk5){
		window.addEventListener('keydown',function(e){
			if(e.code === attk1){
				console.log('x pressed!');
				punch_one(hero_object);
			}
			if(e.code === attk2){
				console.log('c pressed!');
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
		//	attack_characters(hero_object,e.code,attk1,attk2,attk3);
		});
	}
}

function hadoken(hero_object){
	hero_object.y +=20;
	move_vertical(hero_object);
	hero_object.me.className = 'ken_hadoken_main';
	setTimeout(function(){
		hero_object.me.className += ' ken_hadoken_first';
		if(hero_object.x > 300){
			hero_object.x = 300;
			move_horizontal(hero_object);
		}
		setTimeout(function(){
		if(hero_object.x > 100){
			hero_object.x = 100;
			move_horizontal(hero_object);
		}
			hero_object.me.className += ' ken_hadoken_second';
		},300);
	},300);
}








function kick_one(hero_object){
	hero_object.me.className = 'ken_kickone_main';
	setTimeout(function(){
		hero_object.me.className += ' ken_kickone_first';
		setTimeout(function(){
			hero_object.me.className += ' ken_kickone_second';
			setTimeout(function(){
				hero_object.me.className += ' ken_breather_main';
			},150);
		},150);
	},150);
}
function kick_two(hero_object){
	hero_object.me.className = 'ken_kicktwo_main';
	setTimeout(function(){
		hero_object.me.className += ' ken_kicktwo_first';
		setTimeout(function(){
			hero_object.me.className += ' ken_kicktwo_second';
			setTimeout(function(){
				hero_object.me.className += ' ken_kicktwo_third';
				setTimeout(function(){
					hero_object.me.className += ' ken_breather_main';
				},150);
			},150);
		},150);
	},150);
}


function punch_two(hero_object){
	hero_object.me.className = ' ken_punchtwo_main';
	setTimeout(function(){
		hero_object.me.className += ' ken_punchtwo_first';
		setTimeout(function(){
				hero_object.x += 30;
				move_horizontal(hero_object);
				hero_object.me.className += ' ken_punchone_second';
					setTimeout(function(){
						hero_object.x -= 30;
						move_horizontal(hero_object);
						hero_object.me.className = 'ken_punchtwo_main';
					},100);
		},100);
	},100);
}
function punch_one(hero_object){
	hero_object.me.className = ' ken_punchone_main';
	setTimeout(function(){
		hero_object.me.className += ' ken_punchone_first';
		setTimeout(function(){
				hero_object.x += 60;
				move_horizontal(hero_object);
			hero_object.me.className += ' ken_punchone_second';
			setTimeout(function(){
				console.log('punching...');
					hero_object.x += 60;
					move_horizontal(hero_object);
				hero_object.me.className += ' ken_punchone_third';
				setTimeout(function(){
					console.log('punching...');
					hero_object.me.className += ' ken_punchone_fourth';
					setTimeout(function(){
						console.log('punching...');
						hero_object.x -= 120;
						move_horizontal(hero_object);
						hero_object.me.className = 'ken_punchone_main';
					},100);
				},100);
			},100);
		},100);
	},100);
};








let enabled = true;
function move_characters(hero_object,e,a,b,c,d){
	if(e === a){
		hero_object.x -=20;
		move_horizontal(hero_object);
	}
	if(e === c){
		hero_object.x +=20;
		move_horizontal(hero_object);
	}
	if(e === b){
		jump(hero_object);
	}
	if(enabled === true){
		if(e === d){
			crouch(hero_object);
		}
	}
}


function crouch(hero_object){
	enabled = false;
	hero_object.y +=160;
	move_vertical(hero_object);
	hero_object.me.className = 'ken_crouch_main'; /*ypos 710*/
	window.addEventListener('keyup',function(e){
		if(e.code === 'ArrowDown'){
			hero_object.y = 550;
			move_vertical(hero_object);
			hero_object.me.className = 'ken_breather_main';
			enabled = true;
		}
	});
}
	
function move_horizontal(hero_object){
	hero_object.me.style.left = hero_object.x + 'px';
}
function move_vertical(hero_object){
	hero_object.me.style.top = hero_object.y + 'px';
}

function jump(hero_object){
	console.log(hero_object.id + ' jumped!!!');
	hero_object.me.className = 'ken_jump_main';
	hero_object.y -=300;
	move_vertical(hero_object);
	setTimeout(function(){
		hero_object.y -=150;
		move_vertical(hero_object);
		hero_object.me.className += ' ken_jump_first';
		setTimeout(function(){
			hero_object.y +=150;
			move_vertical(hero_object);
			hero_object.me.className += ' ken_jump_second';
			setTimeout(function(){
				hero_object.y +=300;
				move_vertical(hero_object);
				setTimeout(function(){
					//hero_object.me.className = 'ken_jump_main';
				},300);
			},300)
		},300)
	},100);
}


