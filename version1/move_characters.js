console.log('move_characters.js is available');
function move_characters(hero_object,e,a,b,c,d){
	if(e === a){ //left
		hero_object.x -= 10;
		check_position(hero_object);
	}
	if(e === b){ //up
		hero_object.y -= 10;
		check_position(hero_object);
	}
	if(e === c){//right
		hero_object.x += 10;
		check_position(hero_object);
	}
	if(e === d){//down
	 	hero_object.y += 10;
	 	check_position(hero_object);
	}
}


function check_position(hero_object){
	hero_object.me.style.left = hero_object.x + 'px';
	hero_object.me.style.top = hero_object.y + 'px';
}