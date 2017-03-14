function punch(){		
			setTimeout(function(){
				console.log('200 ms passed')
				player.className = ' stance_two';
				setTimeout(function(){
					player.className = 'stance_three';
					setTimeout(function(){
						player.className = 'stance_four';
							setTimeout(function(){
								player.className = 'stance_five';
								setTimeout(function(){
									player.className = 'stance_one';
								},150);
							},100);
					},100);
				},100);
			},200);
}
