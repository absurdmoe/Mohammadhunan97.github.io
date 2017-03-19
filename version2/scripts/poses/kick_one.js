console.log('scripts/poses/kick_one.js is available');
function kick_one(hero_object){
	if(hero_object.stamina_points >= 10){
		hero_object.stamina_points -= 10;
		check_stamina(hero_object);
		console.log('kick_one was done!!!');
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
	}else{
		console.log(hero_object.id + ' does not have enough stamina to perform this move');
	}
}