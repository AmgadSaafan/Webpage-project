var counter =1;
var index=1;
var c=1;
var t=1;
function next() {
	if (counter==4) {
		counter=1;
	}
	else{
		counter++;
	}
	
	document.getElementById("ima").src="image/"+counter+".jpg";
}


function next2() {
	if (index==4) {
		index=1;
	}
	else{
		index++;
	}
	
	document.getElementById("ima2").src="image/"+index+".jpg";
}
function next3() {
	if (c==4) {
		c=1;
	}
	else{
		c++;
	}
	
	document.getElementById("ima3").src="image/"+c+".jpg";
}

function next4() {
	if (t==4) {
		t=1;
	}
	else{
		t++;
	}
	
	document.getElementById("ima4").src="image/"+t+".jpg";
}

setInterval(next,5000);
setInterval(next2,3000);
setInterval(next3,7000);
setInterval(next4,9000);