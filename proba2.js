var line = ["Cao ja sam Mladjone", "Ovo je tekstualni input", "pravljeno u javascriptu"];
var whereTo = document.getElementById("pointHere");
var i = 0;
var k = 0;
var br = 0;
var nizText = "";
var timer = setInterval(writeText, 50);

function writeText(){
	if (i < line[br].length){
		displayText();
	}else{
		removeText();
	}
}

function displayText(){
	nizText = nizText + line[br][i];
	i++;
	whereTo.innerHTML = nizText;
	if (i === line[br].length){
		clearInterval(timer);
		setTimeout(function(){timer = setInterval(writeText, 50)}, 1500);
	}
}
function removeText(){	
	nizText = nizText.substring(0, nizText.length - 1);
	whereTo.innerHTML = nizText;
	if (nizText.length === 0){
		i = 0;
		if (br === line.length-1){
			br = 0;
		}else{
			br++;
		}
	}
}

$( document ).ready(function(){
    function blinker() {
		$('.blinking').fadeOut(500);
		$('.blinking').fadeIn(500);
	}
	setInterval(blinker, 1000);
});


var getNeon0 = document.querySelector("#neon0");
var getNeon1 = document.querySelector("#neon1");
var getNeon2 = document.querySelector("#neon2");
var getNeon3 = document.querySelector("#neon3");
var starterCounterOff = 0;
var starterCounterOn = 0;

function randomFromInterval(from,to) {
	return Math.floor(Math.random()*(to-from+1)+from);
}
function turnNeonOff(){
	var rand = randomFromInterval(50, 500);
	if (starterCounterOff < 10){
		getNeon0.className = "neon0Off";
		getNeon1.className = "neon1Off";
		getNeon2.className = "neon2Off";
		getNeon3.className = "neon3Off";
		starterCounterOff++;
		setTimeout(turnNeonOff,	rand);
	}else{
		getNeon0.className = "neon0On";
		getNeon1.className = "neon1On";
		getNeon2.className = "neon2On";
		turnNeon3off();
		turnNeon3on();
	}
}
function turnNeonOn(){
	var rand = randomFromInterval(50, 1000);
	if (starterCounterOn < 10){
		getNeon0.className = "neon0On";
		getNeon1.className = "neon1On";
		getNeon2.className = "neon2On";
		getNeon3.className = "neon3On";
		starterCounterOn++;
		setTimeout(turnNeonOn, rand);
	}
}
function turnNeon3off(){	
	getNeon3.className = "neon3Off";
	var rand = randomFromInterval(10, 500);
	setTimeout(turnNeon3off, rand);
}
function turnNeon3on(){	
	getNeon3.className = "neon3On";
	var rand = randomFromInterval(10, 100);
	setTimeout(turnNeon3on,	rand);
}

turnNeonOff();
turnNeonOn();

