const cats=["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    return cats.push(name);
}
destructivelyAppendCat("Milo");

function destructivelyPrependCat(name){
    return cats.unshift(name);
}
destructivelyPrependCat("Bob");

function destructivelyRemoveLastCat(){
    return cats.pop();

}
destructivelyRemoveLastCat()
function destructivelyRemoveFirstCat(){
    return cats.shift();

}
destructivelyRemoveFirstCat();
function appendCat(name){
   return [...cats,name]
}
appendCat("Ralph");

function prependCat(name){
    return [name,...cats];

}
prependCat("Bob");


function removeLastCat(){
    
    return cats.slice(0,-1);
}
removeLastCat();


function removeFirstCat(){
    return cats.slice(1);

}
removeFirstCat();