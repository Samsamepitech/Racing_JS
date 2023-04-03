

window.onload=function(){
    
   

    fetch("https://data.education.gouv.fr/api/v2/catalog/datasets/fr-en-annuaire-education/records?limit=25&offset=0")
   
    .then(response => response.json())
    .then((data) => {

        let elt = document.getElementsByTagName("div")[2];


        for(let i=0;i<=24;i++){
        
        let etablissement = data.records[i].record.fields.nom_etablissement;
        let mail=data.records[i].record.fields.mail;
        let commune= data.records[i].record.fields.nom_commune;
        
        console.log(data.records[0].record.fields.nom_etablissement);        
        elt.innerHTML+=commune + mail + etablissement;
        
       
        }
         
       
        
        
      
    });

   
}

