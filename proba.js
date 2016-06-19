var lineOne = "Cao ja sam Mladjone";
var lineTwo = "Ja pravim javascript";
var lineThree = "Igram LoL sa Djurom";
var whereTo = document.getElementById("pointHere");
var i = 0;
var k = 0;
var p = 0;
var s = 0;
var u = 0;
var r = 0;
var nizText = "";
var timer2;
var timer3;
var timer = setInterval(writeText, 50);

function writeText(){
	if (i < lineOne.length){
		displayFirstText();
	}else if(k > 0){
		removeFirstText();
	}else if(p < lineTwo.length){
		displaySecondText();
	}else if(s > 0){
		removeSecondText();
	}else if(r < lineThree.length){
		displayThirdText();
	}else if(u > 0){
		removeThirdText();
	}else {
		i = 0;
		p = 0;
		r = 0;
	}
}
function displayFirstText(){
	nizText = nizText + lineOne[i];
	i++;
	whereTo.innerHTML = nizText;
	k++;
	if (i === lineOne.length){
		clearInterval(timer);
		setTimeout(function(){timer2 = setInterval(writeText, 50)}, 1000);
	}
}
function removeFirstText(){	
	nizText = nizText.substring(0, nizText.length - 1);
	k--;
	whereTo.innerHTML = nizText;
}
function displaySecondText(){
	nizText = nizText + lineTwo[p];
	p++;
	whereTo.innerHTML = nizText;
	s++;
	if (p === lineTwo.length){
		clearInterval(timer2);
		setTimeout(function(){timer3 = setInterval(writeText, 50)}, 1000);
	}
}
function removeSecondText(){
	nizText = nizText.substring(0, nizText.length - 1);
	s--;
	whereTo.innerHTML = nizText;
}
function displayThirdText(){
	nizText = nizText + lineThree[r];
	r++;
	whereTo.innerHTML = nizText;
	u++;
	if (r === lineThree.length){
		clearInterval(timer3);
		setTimeout(function(){timer = setInterval(writeText, 50)}, 1000);
	}
}
function removeThirdText(){
	nizText = nizText.substring(0, nizText.length - 1);
	u--;
	whereTo.innerHTML = nizText;
}

$( document ).ready(function(){
    function blinker() {
		$('.blinking').fadeOut(500);
		$('.blinking').fadeIn(500);
	}
	setInterval(blinker, 1000);
});
