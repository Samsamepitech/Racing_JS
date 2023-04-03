window.onload=function(){
    
    var ok = document.getElementsByTagName("button")[0];
    
    ok.onclick=function(){

         document.getElementsByTagName("input")[0].addEventListener('input', function(){
             
            
             
            fetch("https://geo.api.gouv.fr/communes?")
   
            .then(response => response.json())
            .then((data) => {
               console.log(data);
               let elt = document.getElementsByTagName("div")[2];


                

            }
             )
         
       
       
            
      
            })

   

        }
        
        }