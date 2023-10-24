/*
let x=1;

while (x<=1000 ) {
  if(x%3===0||x&5===0){console.log(x);}

  x++;
   
}



let x=1;

while (x<=100 ) {
  if(x%2===0){console.log(x);}

  x++;
   
}


let x= prompt('enter the number1!');

let y= prompt('enter the number2!');

if(x,y=0){alert('Incorect')}

if(x/y===0 || y/x===0) {alert('Нск це введене вами найбільще число!')
    
}
else(alert('Не можливо встановити нск!'));

*/

let a=1;

let b=1;

let result;
while(a<1000){
    if(a%2===0){

    result+=a;}

let tmp=a+b;
a=b
b=tmp
    }
    console.log(result)