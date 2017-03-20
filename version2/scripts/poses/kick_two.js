console.log('scripts/poses/kick_two.js is available');
function kick_two(hero_object){
	if(hero_object.stamina_points >=20){
		attk4_pressed = true;
		hero_object.stamina_points -= 20;
		check_stamina(hero_object);
		console.log('kick_two was done');
		hero_object.me.className = 'ken_kicktwo_main';
		setTimeout(function(){
			hero_object.me.className += ' ken_kicktwo_first';
			setTimeout(function(){
				hero_object.me.className += ' ken_kicktwo_second';
				setTimeout(function(){
					hero_object.me.className += ' ken_kicktwo_third';
					setTimeout(function(){
						hero_object.me.className = 'ken_breather_main';
					},150);
				},150);
			},150);
		},150);
		let temp = list_of_heros[returnOthers(list_of_heros,hero_object.heros_index)];
		if((hero_object.x >= temp.x -220 && hero_object.x <= temp.x +10 && attk4_pressed === true)&&(hero_object.y >= temp.y -300)){
		console.log('you are killing it, dude');
		temp.x +=30;
		move_horizontal(temp);
		temp.health_points -=1;
		check_health(temp);
		add_dmg(temp,1);
		}

	}else{
		attk4_pressed = false;
		console.log(hero_object.id + ' does not have enough stamina to perform this move');
	}
}