console.log('scripts/poses/hadoken.js is available');
function hadoken(hero_object){
	if(hadoken_enabled === true){
		if(hero_object.stamina_points >= 100){	
			attk5_pressed = true;
		//	hero_object.stamina_points -= 100;
			check_stamina(hero_object);
				hero_object.me.className = 'ken_hadoken_main';
					setTimeout(function(){
						hero_object.me.className += ' ken_hadoken_first';
						if(hero_object.x > 300){ 
						hero_object.x = 100; 
						move_horizontal(hero_object);
						}
							setTimeout(function(){
							hero_object.me.className += ' ken_hadoken_second';
							if(hero_object.x > 100){
								hero_object.x = 100;
								move_horizontal(hero_object);
							}									
								setTimeout(function(){
									hero_object.me.className = 'ken_breather_main';
								},500)
							},300);
					},300);
			let hado_location = hero_object.x + 1100;
			let temp = list_of_heros[returnOthers(list_of_heros,hero_object.heros_index)];
			if(hero_object.y >= temp.y -300){
			console.log('HADOO KEENN');
			setTimeout(function(){temp.x +=300;
			move_horizontal(temp);
			},1100);
			temp.health_points -=15;
			check_health(temp);
			}

		}else{
			attk5_pressed = false;
			console.log(hero_object.id + ' does not have enough stamina to complete this move');
		}
	}else{
		console.log('you cannot currently use hadoken');
	}

}