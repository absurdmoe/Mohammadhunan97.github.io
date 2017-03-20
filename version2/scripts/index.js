console.log('index.js is available');
window.onload = function(){

	window.onmouseover = function(e){
		console.log('test');
		console.log('x pos is: ' + e.clientX + ' and y pos is ' + e.clientY);
	};



	evilKen = new Hero('evilKen','ken',1400,550,1);
	ken = new Hero('ken','ken',500,550,0);
	//list_of_heros.push(ken);
	//list_of_heros.push(evilKen);

	ken.move(ken,'ArrowLeft','ArrowUp','ArrowRight','ArrowDown','KeyX');
	ken.attack(ken,'KeyX','KeyC','KeyV','KeyB','KeyZ');
	evilKen.me.style.transform = 'scaleX('+ (-1) + ')';
	ken_breath(ken);
	ken_breath(evilKen);
	setInterval(function(){
//		ken_breath(ken);
//		ken_breath(evilKen);
	},1200);
	check_stamina(ken);
	check_stamina(evilKen);

//	ai(evilKen);

	setInterval(function(){
		restore_stamina(ken);
		restore_stamina(evilKen);
	},1000,ken,evilKen);

	setInterval(function(){
		if(ken.y > 550 || ken.y < 550){
			ken.y = 550;
			move_vertical(ken);
			ken.me.className = 'ken_breather_main';
		}
	},1200);
} //end of window.onload