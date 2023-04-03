window.onload=function(){

let font = 16;

let color = document.getElementsByTagName("select")[0];


color.onchange = function () {

    document.body.style.backgroundColor = this.value;
};

let more = document.getElementsByTagName("button")[0];

more.onclick = function () {

    font++;
    document.body.style.fontSize = font + "px";
};

let less = document.getElementsByTagName("button")[1];

less.onclick = function () {

    font--;
    document.body.style.fontSize = font + "px";
};

}