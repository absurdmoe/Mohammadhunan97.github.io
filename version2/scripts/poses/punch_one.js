console.log('scripts/poses/punch_one.js is available');
function punch_one(hero_object){

if(hero_object.stamina_points >=20){
	attk1_pressed = true;
	hero_object.stamina_points -= 20;
	check_stamina(hero_object);
	//console.log('punch_one was performed');
	hero_object.me.className = ' ken_punchone_main';
	setTimeout(function(){
		hero_object.me.className += ' ken_punchone_first';
		setTimeout(function(){
		//		hero_object.x += 60;
		//		move_horizontal(hero_object);
			hero_object.me.className += ' ken_punchone_second';
			setTimeout(function(){
		//			hero_object.x += 60;
		//			move_horizontal(hero_object);
				hero_object.me.className += ' ken_punchone_third';
				setTimeout(function(){
					hero_object.me.className += ' ken_punchone_fourth';
					setTimeout(function(){
		//				hero_object.x -= 120;
		//				move_horizontal(hero_object);
						hero_object.me.className = 'ken_punchone_main';
						//setTimeout(function(){
						//	attk1_pressed = false;
						//},300);
					},100);
				},100);
			},100);
		},100);
	},100);
	let temp = list_of_heros[returnOthers(list_of_heros,hero_object.heros_index)];
	if((hero_object.x >= temp.x -240 && hero_object.x <= temp.x +20 && attk1_pressed === true)&&(hero_object.y === temp.y)){
		console.log('yasssss');
		temp.x +=40;
		move_horizontal(temp);
		temp.health_points -=1;
		check_health(temp);
		add_dmg(temp,1);
	}
}else{
	console.log(hero_object.id + ' does not have enough stamina to perform this move');
	attk1_pressed = false;
}
};