console.log('framework/mkr.js is available');
let me = this; // easy to edit window object
let doc = document;

doc.make = function(element){
	return doc.createElement(element);
}
doc.append = function(element){
	doc.appendChild(element);
}
doc.getByID = function(element){
	return doc.getElementById(element);
}
doc.getByTag = function(element,n){
	return doc.getElementsByTagName(element)[n];
}
doc.getByClass = function(element,n){
	return doc.getElementsByClassName(element)[n];
}
function getRand(max,min,except){   //inclusive inclusive 
  min = Math.round(min) || 0;
  max = Math.round(max)+1 || 100;
  let tempmax = max-1;
  let tempmin = min;
  let tempexc = except;
  let randNum = Math.floor(Math.random() * (max - min)) + min;
  if(randNum === except){
      return getRand(tempmax,tempmin,tempexc);
  }else{    //works in all cases even if except is undefined
      return randNum;
  }
}; 
function Sort(array){
  let topnum = array.length -1; 
  let random;
  let temp;
  while(topnum>0){
    random = getRand(topnum,0,topnum);
    temp = array[topnum];
    array[topnum] = array[random];
    array[random] = temp;
    topnum--;
    if(topnum === 1){
      return array;
    }
  }
};

//for this app this is used to return the object that is not currently being called upon
function returnOthers(arr,index){
let temp = [];
for(a = 0; a < arr.length; a++){
  if(a !== index){
    temp.push(a);
  }
}
return temp;
}