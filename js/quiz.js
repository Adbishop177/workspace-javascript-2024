function randInt(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
var M = randInt(300,600);
var N = randInt(100,300);
var K = randInt(0,100);
var total= document.querySelector('#total').textContent = M.toString();
var give = document.querySelector('#giveout').textContent = N.toString();
var take = document.querySelector('#takeback').textContent = M.toString();
var T = N+K;
var S = N-K;
var A = document.querySelector('[value="1"]').nextSibling.nodeValue=M.toString() +"-"+N.toString()+"+"+K.toString();
var B = document.querySelector('[value="2"]').nextSibling.nodeValue=M.toString()+"-"+S;
var C = document.querySelector('[value="3"]').nextSibling.nodeValue=M.toString()+"+"+T;
var A = document.querySelector('[value="4"]').nextSibling.nodeValue=M.toString() +"-"+N.toString()+"-"+K.toString();