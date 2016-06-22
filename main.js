var line = ["Hi, I’m Mladjone, an enthusiastic and self-motivated front end web developer from St. Pazova.", "I enjoy working on design-driven projects and combining the art of design with the art of programming.", "With every line of code, I strive to make the web a beautiful place!"];
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

$( document ).ready(function(){	
	function goHtml(){
		$(".ryuBorder").css("display", "none");
		$(".ryuBorder").css("display", "block");
		$(".ryuFull").css("display", "none");
		$(".ryuJump").css("display", "none");
		$(".ryuFire").css("display", "none");
	}
	function goCss(){
		$("#ryuOverlay").css("top", 0);
		$(".ryuBorder").css("display", "block");
		$(".ryuFull").css("display", "block");
		$(".ryuJump").css("display", "none");
		$(".ryuFire").css("display", "none");
		$('#ryuOverlay').animate({top:'-205px'}, 3500);
	}
	function goJs(){
		$(".ryuBorder").css("display", "none");
		$(".ryuFull").css("display", "none");
		$(".ryuJump").css("display", "block");
		$(".ryuFire").css("display", "none");
	}
	function goJq(){
		$(".ryuBorder").css("display", "none");
		$(".ryuFull").css("display", "none");
		$(".ryuJump").css("display", "none");
		$(".ryuFire").css("display", "block");
		$('.ryuFire').append('<img class="hadouken" src="Images/RyuBall.gif">');
		$('.hadouken').animate({
							"padding-left": "380px"
						}, 2000, 'swing', function() {
        									this.remove();
        								}
        			);
	}
	$('#showFirst').click(goHtml);
	$('#showSecond').click(goCss);
	$('#showThird').click(goJs);
	$('#showFourth').click(goJq);

	$('#showFirst').hover(
		function() {
    		$('.selector').addClass('selector0');
		}, 
		function() {
    		$('.selector').removeClass('selector0');
	});
	$('#showSecond').hover(
		function() {
    		$('.selector').addClass('selector1');
		}, 
		function() {
    		$('.selector').removeClass('selector1');
	});
	$('#showThird').hover(
		function() {
    		$('.selector').addClass('selector2');
		}, 
		function() {
    		$('.selector').removeClass('selector2');
	});
	$('#showFourth').hover(
		function() {
    		$('.selector').addClass('selector3');
		}, 
		function() {
    		$('.selector').removeClass('selector3');
	});

});
$( document ).ready(function(){
    function selectorBlin() {
		$('.blinkPath').fadeOut(100);
		$('.blinkPath').fadeIn(100);
	}
	setInterval(selectorBlin, 200);
});
