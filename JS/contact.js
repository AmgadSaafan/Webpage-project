function Mode() {
	var formlabel=document.getElementsByTagName('label');
	var formtextarea =document.getElementsByTagName('textarea');
	var forminput=document.getElementsByTagName('input');
	var x = document.getElementById('Dark');
	if (x.value == "DarkMode") {

		for (var i = 0; i < 4; i++) {
			formlabel[i].style="color:black";
			forminput[i].style=" background:black; color:white; border:1px solid white";
		}
		formtextarea[0].style=" background:black; color:white; border:1px solid white";
		forminput[4].style=" background:black; color:white; border:1px solid white";
		x.value = "LightMode";
	}
	else if (x.value == "LightMode") {
for (var i = 0; i <= 3; i++) {
			formlabel[i].style="color:white";
			forminput[i].style=" background:white; color:black; border:2px solid white";
		}
		formtextarea[0].style=" background:white; color:black; border:2px solid white";
		forminput[3].style="  background: none; color: white; border: 2px solid #bbe1fa;";
		forminput[4].style="  background: none; color: white; border: 2px solid #bbe1fa;";
		x.value = "DarkMode";
	}
}