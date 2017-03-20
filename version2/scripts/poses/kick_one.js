console.log('scripts/poses/kick_one.js is available');
function kick_one(hero_object){
	if(hero_object.stamina_points >= 10){
		attk3_pressed = true;
		hero_object.stamina_points -= 10;
		check_stamina(hero_object);
		console.log('kick_one was done!!!');
			hero_object.me.className = 'ken_kickone_main';
			setTimeout(function(){
				hero_object.me.className += ' ken_kickone_first';
				setTimeout(function(){
					hero_object.me.className += ' ken_kickone_second';
					setTimeout(function(){
						hero_object.me.className = 'ken_breather_main';
					},150);
				},150);
			},150);
		let temp = list_of_heros[returnOthers(list_of_heros,hero_object.heros_index)];
		if((hero_object.x >= temp.x -220 && hero_object.x <= temp.x +20 && attk3_pressed === true)&&(hero_object.y >= temp.y -300)){
		console.log('ohhhh tell em');
		temp.x +=10;
		move_horizontal(temp);
		temp.health_points -=0.5;
		check_health(temp);
		add_dmg(temp,0.5);
	}
	}else{
		attk3_pressed = false;
		console.log(hero_object.id + ' does not have enough stamina to perform this move');
	}
}