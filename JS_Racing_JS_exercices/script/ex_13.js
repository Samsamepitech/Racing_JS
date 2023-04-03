window.onload=function(){
    
var div2 = document.getElementsByTagName("div")[2];

if (localStorage.getItem('ex12_img')) {
    div2.innerHTML = '<img src=' + localStorage.getItem('ex12_img') + '></img>';
    var img = div2.children[0];
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.display = "block";
}

var percent= 100;
var i = "";
var d = "";


function decrease(){
    if (img.style.width != "0%") {
        percent--;
        img.style.width = percent + '%';
        img.style.height = percent + '%';
    }
}

img.onmouseenter = function () {
    
    d = setInterval(decrease,1000); 
    clearInterval(i);  
};



function increase(){
            if (img.style.width != "100%") {
            percent++;
            img.style.width = percent + '%';
            img.style.height = percent + '%';
        }
}

img.onmouseleave = function () {
    
    i = setInterval(increase, 1000); 
    clearInterval(d);
};



img.onclick = function(){

    localStorage.removeItem('ex12_img');
    div2.removeChild(img);
    
};

}