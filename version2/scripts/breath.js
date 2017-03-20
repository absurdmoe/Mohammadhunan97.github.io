console.log('breath.js is available');
function ken_breath(hero_object){
		hero_object.me.className = 'ken_breather_main';
	setTimeout(function(){
		hero_object.me.className += ' ken_breather_first';
		setTimeout(function(){
			hero_object.me.className += ' ken_breather_second';
		},333);
	},333);

}