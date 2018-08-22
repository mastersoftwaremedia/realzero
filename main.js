function changeText(text){
	document.getElementById('h3_text').innerHTML=text;
}
// Get the signup modal
var modal = document.getElementById('signup');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event){
	if (event.target == modal) {
		modal.style.display = "none";
  }
}

// Get the login modal
var modal = document.getElementById('login');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
  }
}