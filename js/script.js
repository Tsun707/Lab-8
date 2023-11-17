function init(){
	var button = document.getElementById('entrybutton');
	
	function alertfunction(){
	var textshow = document .getElementById('entryinput');
	document.getElementById('textoutput').innerHTML = textshow.value;
	alert("Tianrui Sun:" + textshow.value);
    }
	
    button.addEventListener('click', alertfunction);
}
	
//add your javascrip between these two lines of code

window.addEventListener('load', init);
