window.onload=function() {
    
var div = document.getElementsByTagName("div")[2];

localStorage.setItem('ex12_img',"https://www.coding-academy.fr/wp-content/uploads/2017/10/CODING_LOGO_CMJN.png");

if(localStorage.getItem('ex12_img')){

    div.innerHTML = '<img src=' + localStorage.getItem('ex12_img') + '>';
     div.children[0].style.display = "block";
     div.children[0].style.width = "100%";
     div.children[0].style.height = "100%"; 
    
    
   
}   

}