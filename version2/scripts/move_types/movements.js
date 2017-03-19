console.log('scripts/move_types/movements.js is available');
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
	if(e === d){
			crouch(hero_object);
		}
	}


function crouch(hero_object){
//	enabled = false;
	hero_object.y = 710;
	move_vertical(hero_object);
	hero_object.me.className = 'ken_crouch_main'; /*ypos 710*/
	window.addEventListener('keyup',function(e){
		if(e.code === 'ArrowDown'){
	//		hero_object.y = 550;
			move_vertical(hero_object);
		//	hero_object.me.className = 'ken_breather_main';
	//		enabled = true;
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
			hero_object.me.className += ' ken_jump_second';
			setTimeout(function(){
				setTimeout(function(){
				},300);
			},300)
		},300)
	},100);
}