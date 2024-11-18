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
function changeStyle(e){
    e.preventDefault();
    var classname = this.getAttribute("class");
    //alert("clicked class"+classname);
    if (classname == "answer"){
        this.setAttribute("class","answer selected");
    }
    else{
        this.setAttribute("class","answer Deselected");
    }
    this.animate([{transform:'rotate(0deg)'},{transform:'rotate(180deg)'}],{duration:3000, fill:'forwards'});
}
var answerlist = document.getElementsByClassName('answer');
for(var i = 0; i<4; i++){
    answerlist[i].addEventListener('click', changeStyle, false);
}
