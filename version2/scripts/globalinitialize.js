console.log('globalinitialize.js is available');
let id;
let health = doc.getByTag('h1',0);
let healthpoints = 100;
health.innerText = 'HEALTH: ' + healthpoints;
/*ClassName needs to be defined here because its not defined in the Hero object 
and the below classes are where they get there positioning */
let p2_health = doc.getByTag('h1',1);
let p2_stamina = doc.getByTag('h2',1);
p2_health.className = 'enemyhealth';
p2_stamina.className = 'enemystamina';



let p2_healthpoints = 100;
p2_health.innerText = 'HEALTH: ' + p2_healthpoints;