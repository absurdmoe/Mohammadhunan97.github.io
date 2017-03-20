console.log('scripts/add_dmg.js is available!!');

function add_dmg(hero_losing, dmg_amount){
		let tempdmg = doc.make('h1');
		doc.body.append(tempdmg);
		tempdmg.innerText = hero_losing.id + ' lost ' + dmg_amount + ' health';
		tempdmg.style.position = 'absolute';
		tempdmg.style.left = hero_losing.x + 'px';
		tempdmg.style.top = (hero_losing.y - 400) + 'px';
		tempdmg.className = 'dmg';
		setTimeout(function(){
			doc.body.removeChild(tempdmg);
		},300);
}