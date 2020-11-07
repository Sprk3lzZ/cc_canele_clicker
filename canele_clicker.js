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
         x-=25;   document.getElementById("zero").innerHTML= x; document.getElementById("prix").innerHTML= 100;     
      }
      break;
      case 2:
      if (x>=100){
         lv=4;
         x-=100;   document.getElementById("zero").innerHTML= x;   document.getElementById("prix").innerHTML= 500;
       
   }
   break;
      case 4:
      if (x>=500){
         lv=50;
         x-=500;   document.getElementById("zero").innerHTML= x ; document.getElementById("prix").innerHTML= 5000;
}
break;
      case 50:
      if (x>=5000){
         lv=200;
         x-=5000;   document.getElementById("zero").innerHTML= x ; document.getElementById("prix").innerHTML= 100000;
}
break;
      case 200:
      if (x>=100000){
         lv=500;
         x-=100000;   document.getElementById("zero").innerHTML= x ; document.getElementById("prix").innerHTML= "max";
}
break;
}
}

function musique(){
   let audio = new Audio('saloon.mp3');
   audio.play();
}