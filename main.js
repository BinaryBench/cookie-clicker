var UPDATE_SCORE_MILLIS = 100;
var score = 0;
var cookies = 0;

var cursors = 0;
var cps = 0;
var cursorCost = 1;

var cookiesCountElm = document.getElementById("cookieCount");
var scoreElm = document.getElementById("score");
var cursorBtn = document.getElementById("cursorBtn");
var cookiesPerSecondElm = document.getElementById("cookiesPerSecond");

function cookieClick()
{
	score++;
	cookies++;
	updateStats();
}

function cursorClick() 
{
	if (cookies >= cursorCost)
	{
		cookies -= cursorCost;
		cursors++;
		cps++;
		cursorCost *= 2;

		cursorBtn.innerHTML = "Cursors: " + cursors + "<br>Cost: " + cursorCost;

		updateStats();
	}
}

function updateStats()
{
	cookiesCountElm.innerHTML = Math.floor(cookies) + " cookies";
	scoreElm.innerHTML = "Score: " + Math.floor(score);
	cookiesPerSecondElm.innerHTML = cps + " per second";
}

cursorBtn.addEventListener("click", cursorClick);

function updateCookies()
{
	cookies += cps * (UPDATE_SCORE_MILLIS / 1000);
	score += cps  * (UPDATE_SCORE_MILLIS / 1000);
	updateStats();
	window.setTimeout(updateCookies, UPDATE_SCORE_MILLIS);
}

window.setTimeout(updateCookies, UPDATE_SCORE_MILLIS);


