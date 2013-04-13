function click1() {
	document.getElementById('270').checked=true; 
	document.getElementById('270img').src='images/zuck_left_high.jpg'; 
	document.getElementById('180img').src='images/zuck.png'; 
	document.getElementById('90img').src='images/zuck_right.png';
}

function click2() {
	document.getElementById('180').checked=true; 
	document.getElementById('180img').src='images/zuck_high.jpg'; 
	document.getElementById('270img').src='images/zuck_left.png'; 
	document.getElementById('90img').src='images/zuck_right.png';
}

function click3() {
	document.getElementById('90').checked=true; 
	document.getElementById('90img').src='images/zuck_right_high.jpg'; 
	document.getElementById('270img').src='images/zuck_left.png'; 
	document.getElementById('180img').src='images/zuck.png';
}

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('270img').addEventListener('click', click1);
	document.getElementById('180img').addEventListener('click', click2);
	document.getElementById('90img').addEventListener('click', click3);
});