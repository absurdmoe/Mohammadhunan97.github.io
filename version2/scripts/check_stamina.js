function restore_stamina(hero_object){
	//console.log(hero_object);
		if(hero_object.stamina_points < 400){
		hero_object.stamina_points +=1;
		check_stamina(hero_object);
		//console.log(hero_object.stamina_points);
		}
	};
function check_stamina(hero_object){
	hero_object.me.stamina.innerText = 'STAMINA: ' + hero_object.stamina_points;
	if(hero_object.stamina_points < 5){
			hero_object.health_points -=25;
			check_health(hero_object);
	}
}
function check_health(hero_object){
	if(hero_object.health_points === 0){
		alert(hero_object.id + ' has lost...');
		alert('restarting...');
		hero_object.health_points = 100;
		hero_object.stamina_points = 400;
		check_stamina(hero_object);
	}
	hero_object.me.health.innerText = 'HEALTH: ' + hero_object.health_points;
}