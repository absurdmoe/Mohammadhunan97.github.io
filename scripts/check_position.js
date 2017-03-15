
function check_position(key){
   // console.log('checking position...');
	switch(key) {
        //note caplocks cannot be on so 'key' property will have to go
    case 'a':
        player.style.left = player_one_horizontal_position + 'px';
        overlap(player,player2);
        break;
    case 'd':
        player.style.left = player_one_horizontal_position + 'px';
        overlap(player,player2);
        break;
    case 'w':
        player.style.top = player_one_vertical_position + 'px';
        overlap(player,player2);
        break;
	case 's':
        player.style.top = player_one_vertical_position + 'px';
        overlap(player,player2);
        break; 
 	case 'ArrowLeft':
 		player2.style.left = player_two_horizontal_position + 'px';
        overlap(player,player2);
 		break;
 	case 'ArrowRight':
 		player2.style.left = player_two_horizontal_position + 'px';	
        overlap(player,player2);
 		break;
	case 'ArrowUp':
		player2.style.top = player_two_vertical_position + 'px';
        overlap(player,player2);
		break;
	case 'ArrowDown':
		player2.style.top = player_two_vertical_position + 'px';
        overlap(player,player2);
		break;
		}//end of switch
}
/* If collision detected - > throwable = true
if near collision - > punchable = true
else - > throwable & punchable = false
*/
function overlap(){
x1 = player_one_horizontal_position;
x2 = player_two_horizontal_position;
    if(x1 === x2){
        console.log('collision detected');
    }
    if((x1 <= x2-49)&&(x1 >= x2-51)){
        console.log('near collision');
    }
}