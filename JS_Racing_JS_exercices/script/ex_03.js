
	window.onload = function() {
        
		let elt = document.getElementsByTagName("div")[2];
		elt.onclick =function ask() {

			let name = prompt("What is your name ?");

        if(name) {

           let confirmation = window.confirm("Are you sure " + name + " is your name ?");

                if(confirmation){
            
                    alert("Hello " + name + " !");
                    elt.innerHTML = "Hello " + name + " !";
                            
                    
                }

		
		} 
	}

};


    