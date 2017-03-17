let choose;
let hero1;
let id;
console.log('page1.js is available');
window.onload = function(){


	id = prompt('which character would you like to choose');

	hero1 = new Hero(id,'hero1',500,200,122,300);
	hero1.move(hero1,'ArrowLeft','ArrowUp','ArrowRight','ArrowDown');
	
	setInterval(function(){
		ryu_bounce();
	},1000);


	
}
