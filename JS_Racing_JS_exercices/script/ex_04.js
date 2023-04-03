window.onload = function() {

	let elt = document.getElementsByTagName("div")[2];
	let  elt2= "";

	document.addEventListener('keydown', function(press) {

		elt2 = elt2 + (press.key);
		
		
		elt.innerHTML = elt2.slice(-42);

	});
	
};