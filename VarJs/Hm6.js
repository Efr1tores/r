/*for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

 
let x= prompt('Enter number!')

let result=1;

if(x>=0){

for (let y = 1; y<=x; y++  ) {
  result*=y;
  
 
  
}
console.log(result);
}
else{console.log('Enter +number!');}

result+=i;
i++;



let x=1;

while (x<=20 ) {
  if(x%2===0){console.log(x);}

  x++;
   
}


let i=0;

let result=1;

for (let index = 0; index <= 100; index++) {

 i+=index;
 

}
console.log(i);



let x= prompt('Enter number!');

for (let index = 0; index < Math.sqrt(x); index++) {

  if(x%index===0){return false;}


  
}
console.log(x)
*/


let first=0;

let second=1;


console.log(first);

console.log(second);

for (let index = 2; index < 10; index++) {
 let next=(first+second);
 console.log(next);
 first=second;

 second=next;
  
}



