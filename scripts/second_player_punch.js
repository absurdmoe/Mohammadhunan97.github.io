function second_player_punch(){		
			setTimeout(function(){
				console.log('200 ms passed')
				player2.className = 'second_stance';
				setTimeout(function(){
					player2.className = 'third_stance';
					setTimeout(function(){
						player2.className = 'fourth_stance';
							setTimeout(function(){
								player2.className = 'fifth_stance';
								setTimeout(function(){
									player2.className = 'first_stance';
								},150);
							},100);
					},100);
				},100);
			},200);
}
