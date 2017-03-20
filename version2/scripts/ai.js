console.log('scripts/ai.js is available');
function ai(hero_object){
	setInterval(function(){
		let temp2 = getRand(100,1);
		let temp3 = getRand(10,1);
	/*move left or right*/
		if(evilKen.x < ken.x){
			evilKen.x += temp2;
			move_horizontal(evilKen);
		}else{
			evilKen.x -= temp2;
			move_horizontal(evilKen);
		}
	let temp = list_of_heros[returnOthers(list_of_heros,hero_object.heros_index)];
	let temp4 = getRand(5,1);
	if(hero_object.x >= temp.x -200 && hero_object.x <= temp.x +20){
		console.log('test');
		if(hero_object.stamina_points > 100){
		if(temp4 === 1) punch_one(hero_object);
		if(temp4 === 2) punch_two(hero_object);
		if(temp4 === 3)	kick_one(hero_object);
		if(temp4 === 4)	kick_two(hero_object);
		hero_object.me.className += ' topdog';
		}else{
			evilKen.x += 100;
			move_horizontal(evilKen);
		}
	}
	},500);
}