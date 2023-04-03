
 window.onload=function(){   

    var canvas = document.getElementsByTagName("canvas")[0];
    var div = document.getElementsByTagName("div")[2];


    var position = document.body.children[0].children[0].children[2].children[1];

    div.style.position = "relative";
    canvas.style.position = "absolute";

    canvas.draggable = true;

    canvas.ondrag = function() {

    canvas.style.visibility ="visible";

    }

    div.ondragover = function (event) {
        

        let x = event.offsetX;
        let y = event.offsetY;
        

        if (x > 675) {
            x = 675;
        }
        if (y > 85) {
            y = 85;
        }

        position.innerText = "New coordinates=> {x:" + x + ", y:" + y + "}";

        canvas.ondragend = function () {
           
            canvas.style.visibility = "visible";
            canvas.style.top = y + "px";
            canvas.style.left = x + "px";
        };
    };
    
    
    

 }








