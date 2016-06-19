var strNiz = "Cao ja sam Mladjone";
var whereTo = document.getElementById("pointHere");
var i = 0;
var nizText = "";

function displayText(){
	whereTo.innerHTML = nizText;
}
function writeText(){
	displayText();
	if (i < strNiz.length){
		nizText = nizText + strNiz[i];
		i++;
	}else{
		setTimeout(function(){clearInterval(timer);}, 1000);
		var nextTimer = setInterval(deleteText, 100);
		
	}
}
var timer = setInterval(writeText, 50);

function deleteText(){
	displayText();
	if (i > 0){
		nizText = nizText.substring(0, nizText.length - 1);
		i--;
	}
}

$( document ).ready(function(){
    function blinker() {
		$('.blinking').fadeOut(500);
		$('.blinking').fadeIn(500);
	}
setInterval(blinker, 1000);
});
