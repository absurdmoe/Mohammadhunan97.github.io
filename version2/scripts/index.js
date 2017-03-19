console.log('index.js is available');
let id;
let health, stamina;
let healthpoints = 97;
let staminapoints = 400;


window.onload = function(){
	health = doc.getByTag('h1',0);
	health.innerText = 'HEALTH: ' + healthpoints;
	stamina = doc.getByTag('h2',0);
	stamina.innerText = 'STAMINA: ' + staminapoints;




	ken = new Hero('ken','ken',500,550,122,300);
	ken.move(ken,'ArrowLeft','ArrowUp','ArrowRight','ArrowDown','KeyX');	/*don't remove
	or it doesn't move*/
	ken.attack(ken,'KeyX','KeyC','KeyV','KeyB','KeyZ');
	ken.me.className = 'ken_breather_main';
	ken_breath();

	setInterval(function(){
		ken_breath();
		if(ken.y !== 550){
			console.log('position fixed');
			ken.y = 550;
			ken.me.className = 'ken_breather_main';
			move_vertical(ken);
		}
	},1500);

} //end of window.onload

function ken_breath(){
	ken.me.className = 'ken_breather_main';
	setTimeout(function(){
		ken.me.className += ' ken_breather_first';
		setTimeout(function(){
			ken.me.className += ' ken_breather_second';
		},333);
	},333);
	if(healthpoints < 100){
		healthpoints++;
	}
}

setInterval(function(){
	health.innerText = 'HEALTH: ' + healthpoints;
},300);
