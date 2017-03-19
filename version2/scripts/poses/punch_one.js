console.log('scripts/poses/punch_one.js is available');
function punch_one(hero_object){
if(hero_object.stamina_points >=20){
	hero_object.stamina_points -= 20;
	check_stamina(hero_object);
	console.log('punch_one was performed');
	hero_object.me.className = ' ken_punchone_main';
	setTimeout(function(){
		hero_object.me.className += ' ken_punchone_first';
		setTimeout(function(){
				hero_object.x += 60;
				move_horizontal(hero_object);
			hero_object.me.className += ' ken_punchone_second';
			setTimeout(function(){
					hero_object.x += 60;
					move_horizontal(hero_object);
				hero_object.me.className += ' ken_punchone_third';
				setTimeout(function(){
					hero_object.me.className += ' ken_punchone_fourth';
					setTimeout(function(){
						hero_object.x -= 120;
						move_horizontal(hero_object);
						hero_object.me.className = 'ken_punchone_main';
					},100);
				},100);
			},100);
		},100);
	},100);
}else{
	console.log(hero_object.id + ' does not have enough stamina to perform this move');
}
};
