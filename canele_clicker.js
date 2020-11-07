var x=0;
var lv=1;
function oncl(){
   x+=lv;
   textUpdate();
    
}
function textUpdate(){
    document.getElementById("zero").innerHTML=x+"";
    
};
function upgrade(){
   switch (lv) {
      case 1:
      if (x>=25){
         lv++;
         x-=25;   document.getElementById("zero").innerHTML= x;
      }
      break;
      case 2:
      if (x>=50){
         lv=4;
         x-=50;   document.getElementById("zero").innerHTML= x ;
       
   }
   break;
      case 4:
      if (x>=100){
         lv=8;
         x-=100;   document.getElementById("zero").innerHTML= x ;
}
break;
}
}

function musique(){
   let audio = new Audio('saloon.mp3');
   audio.play();
}