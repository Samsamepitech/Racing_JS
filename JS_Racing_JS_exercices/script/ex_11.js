window.onload=function(){

var footer = document.getElementsByTagName("footer")[0];
var div = document.getElementsByTagName("div")[2];
var ok = document.getElementsByTagName("a")[0];




ok.onclick = function() {

    let cookieDate = new Date(Date.now() + 86400000);
    document.cookie = 'acceptsCookies=true; expires=' + cookieDate;
    div.innerText = "";
    

    var newDiv = document.createElement("div");
    footer.appendChild(newDiv);
    
    var button = document.createElement("button");
    newDiv.appendChild(button);
    button.innerText = "delete the cookie";

    button.onclick = function(){
        footer.removeChild(newDiv);
        cookieDate = new Date(Date.now() - 86400000);
        document.cookie = 'acceptsCookies=true; expires=' + cookieDate;
        div.innerText = "This website use cookies, click OK to accept it. ";
        div.appendChild(ok);
    };
};

}