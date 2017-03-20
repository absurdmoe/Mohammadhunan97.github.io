console.log('gravity.js is available');

	function gravity(hero_object){
		let speed = getRand(100,30);
		if(hero_object.y < 500){
			hero_object.y += speed;
			move_vertical(hero_object);
		}
		if(hero_object.y >= 500){
			//crouch(hero_object);
			hero_object.me.className = 'ken_breather_main';
		}		
	}