function ShowDiv() {
	var open=document.getElementById('Button2');
	var x = document.getElementById('show'); 
	if (x.style.display == "none" && open.value == "Learn More") {
	x.style="display:block";
	open.value ="Learn Less";
	}
	else{
		x.style.display="none";
		open.value ="Learn More";	
	}
	
}


function ShowDiv2(){

	var open=document.getElementById('Button');
	var y = document.getElementById('show2'); 
	if (y.style.display == "none" && open.value == "Learn More" ) {
	y.style="display:block";
	open.value ="Learn Less";
	}
	else{
		y.style.display="none";
		open.value ="Learn More";
			
	}
}

function Slied() {
	document.getElementById("sidemenu").style.width="200px";
	document.getElementById("Menuimage").style.width="0px";

	
}


function closeSlied() {
	document.getElementById("sidemenu").style.width="0px";
	document.getElementById("Menuimage").style.width="30px";
}