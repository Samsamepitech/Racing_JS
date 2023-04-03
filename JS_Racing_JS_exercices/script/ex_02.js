
	window.onload = function() {
        let i = 1;

		function count() {
			elt.innerHTML = i;
			i++;
		}
		
		let elt = document.getElementsByTagName("div")[2];
		elt.onclick = count;
	};
