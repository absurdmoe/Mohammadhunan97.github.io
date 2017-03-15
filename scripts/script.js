window.onload = function(){
move = 300;
/* The following variables are globally available in a function expression */
player = doc.getByID('player');
player2 = doc.getByID('player2');
player_one_horizontal_position = 300; 
player_one_vertical_position = 0; 
player_two_horizontal_position = 500;
player_two_vertical_position = -140;
/* PLAYER PUNCH KEYS */
	window.addEventListener('keydown',function(e){

		/* IF PUNCH*/
		if(e.key === '/'){  second_player_punch(); }
		if(e.key === 'r'){  first_player_punch();  };
		/* IF MOVE */
		if(e.key === 'd'){	
			player_one_horizontal_position += 10; 
			check_position('d');
		}
		if(e.key === 'a'){ 
			player_one_horizontal_position -= 10; 
			check_position('a');  
		};
		if(e.key === 'w'){ 
			player_one_vertical_position -= 10; 
			check_position('w');  
		};
		if(e.key === 's'){ 
			player_one_vertical_position += 10; 
			check_position('s');  
		};
		if(e.key === 'ArrowLeft'){
			player_two_horizontal_position -=10;
			check_position('ArrowLeft');
		}
		if(e.key === 'ArrowRight'){
			player_two_horizontal_position +=10;
			check_position('ArrowRight');
		}
		if(e.key === 'ArrowUp'){
			player_two_vertical_position -=10;
			check_position('ArrowUp');
		}
		if(e.key === 'ArrowDown'){
			player_two_vertical_position +=10;
			check_position('ArrowDown');
		}

	})
hero1 = new Hero(player_one_horizontal_position,player_two_vertical_position);
hero2 = new Hero(player_two_horizontal_position,player_two_vertical_position);

}