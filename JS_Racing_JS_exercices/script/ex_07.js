window.onload=function(){
    
let canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext("2d");

    /*triangle*/
    ctx.beginPath();
    ctx.moveTo(6, 6);
    ctx.lineTo(14, 10);
    ctx.lineTo(6, 14);
    ctx.closePath();

    /*contours*/
    ctx.borderWidth = 1;
    ctx.strokeStyle = 'white';
    ctx.stroke();

    /*intérieur*/
    ctx.fillStyle = 'white';
    ctx.fill();


var lecteur = new Audio();
lecteur.src = "./triangle.ogg";

canvas.onclick = function() {
	
	lecteur.play();
}

let bouton = document.getElementsByTagName("button");

bouton[0].onclick = function() {
	
	lecteur.pause();
	
}

bouton[1].onclick = function() {
	
	lecteur.pause();


}

bouton[2].onclick = function() {
	
	lecteur.muted()

}

}
