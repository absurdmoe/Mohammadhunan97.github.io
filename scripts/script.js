let player;
let player2;
let move;


window.onload = function(){
move = 300;
/* The following variables are globally available in a function expression */
player = doc.getByID('player');
player2 = doc.getByID('player2');
player_one_horizontal_position = 300; 
player_one_vertical_position = 10; 
player.style.left = player_one_horizontal_position;
player.style.top = player_one_vertical_position;   
/* PLAYER PUNCH KEYS */

	window.addEventListener('keydown',function(e){
		if(e.code === 'Period'){  second_player_punch(); }
		if(e.code === 'KeyX'){  punch();  };
		if(e.code === 'KeyD'){	player_one_horizontal_position -= 10; 
			check_position(e.code);
		}
		if(e.code === 'KeyA'){ 
			player_one_horizontal_position += 10; 
			check_position(e.code);  
		};


	})


}


function check_position(code){
	switch(code) {
    case 'KeyA':
        player.style.left = player_one_horizontal_position + 'px';
        break;
    case 'KeyD':
        player.style.left = player_one_horizontal_position + 'px';
        break;
 
	}


	
}