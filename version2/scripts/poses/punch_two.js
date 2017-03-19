console.log('scripts/poses/punch_two.js is available');
function punch_two(hero_object){
if(hero_object.stamina_points >=10){
		hero_object.stamina_points -= 10;
		check_stamina(hero_object);
	console.log('punch_two was performed');
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
}else{
	console.log(hero_object.id + ' does not have enough stamina to perform this move');
}	
}