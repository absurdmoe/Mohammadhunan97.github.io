let hero1;
console.log('page1.js is available');
window.onload = function(){
	hero1 = new Hero('hero1',500,200,122,300);
	hero1.move(hero1,'ArrowLeft','ArrowUp','ArrowRight','ArrowDown');
	setInterval(function(){
		ryu_bounce();
	},1000);

	/*
		window.onclick = function(){
			console.log('test');
			//hero1.me.className = 'ryu_punch';
		}
	*/
	
}
