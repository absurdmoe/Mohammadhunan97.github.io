console.log('ryu_bounce.js is available');

function ryu_bounce(){
	setTimeout(function(){
		hero1.me.className = 'first_stance';
		setTimeout(function(){
		hero1.me.className = 'second_stance';
			setTimeout(function(){
			hero1.me.className = 'third_stance';
					setTimeout(function(){
					hero1.me.className = 'fourth_stance';
						setTimeout(function(){
						hero1.me.className = 'fifth_stance';
						},300);
					},300);
			},300);
		},300);
	},300);


	
}