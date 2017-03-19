console.log('scripts/poses/kick_two.js is available');
function kick_two(hero_object){
	if(hero_object.stamina_points >=20){
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
						hero_object.me.className += ' ken_breather_main';
					},150);
				},150);
			},150);
		},150);
	}else{
		console.log(hero_object.id + ' does not have enough stamina to perform this move');
	}
}