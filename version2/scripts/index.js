console.log('index.js is available');
window.onload = function(){
	evilKen = new Hero('evilKen',1400,550,1);
	ken = new Hero('ken',500,550,0);
	ken.move(ken,'ArrowLeft','ArrowUp','ArrowRight','ArrowDown','KeyX');
	ken.attack(ken,'KeyX','KeyC','KeyV','KeyB','KeyZ');
	evilKen.me.style.transform = 'scaleX('+ (-1) + ')';

	ken_breath(ken);
	ken_breath(evilKen);

	check_stamina(ken);
	check_stamina(evilKen);

	 setInterval(function(){
	 	if(ken.y !== 550){
	 		ken_breath(ken);
	 		ken_breath(evilKen);
	 		console.log('position fixed');
	 		ken.y = 550;
	 		ken.me.className = 'ken_breather_main';
	 		move_vertical(ken);
	 	}
	 },1500);
} //end of window.onload
