console.log('scripts/poses/punch_two.js is available');
function punch_two(hero_object){
if(hero_object.stamina_points >=10){
	attk2_pressed = true;
	check_stamina(hero_object);
	hero_object.me.className = ken.id + "_punchtwo_main";
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
	let temp = list_of_heros[returnOthers(list_of_heros,hero_object.heros_index)];
	if((hero_object.x >= temp.x -200 && hero_object.x <= temp.x +20 && attk2_pressed === true)&&(hero_object.y >= temp.y -300)){
		console.log('cash me outside');
		temp.x +=10;
		move_horizontal(temp);
		temp.health_points -=0.5;
		check_health(temp);
		add_dmg(temp,0.5);
	}

}else{
	console.log(hero_object.id + ' does not have enough stamina to perform this move');
	attk2_pressed = false;
}	
}