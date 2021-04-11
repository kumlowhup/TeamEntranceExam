window.onload = function(){
    var i = 0;
    var dot1 = document.getElementsByClassName("dot")[0];
    var dot2 = document.getElementsByClassName("dot")[1];
    var dot3 = document.getElementsByClassName("dot")[2];
    var pg1 = document.getElementById("pg1");


    
    var dots = [dot1,dot2,dot3];
    dotNow = dot1;
    dotLast = dot3;
    dotNow.style.width = "21px";
    setInterval(function(){
        
        dotLast.style.width = "9px";
        if(i == 3){
            i = 0;
        }

        pg1.style.backgroundImage = "url('img/BlueBreeyCake-"+ (i+1) +".png')";
        dotNow = dots[i];
        dotNow.style.width = "21px";
        dotLast = dotNow;
        i++;
    },3000);
}