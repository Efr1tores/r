/*let num=+prompt('Enter 1 number ');

let numb=+prompt('Enter 2 number');

let numbe=prompt('Enter action + , - , * , /');


let result=1

function plus(x,y) {
    return x+y;
    
}

function minus(x,y) {
    return x-y;
    
}
function mnogity(x,y) {
    return x*y;
    
}
function dilut(x,y) {
    if (x>0 && y>0 ) {return x/y;}
    else{alert('Error');}
    
    
    
}
switch (numbe) {
    case '+':
        result=plus(num, numb);
        break;

        case '-':
        result=minus(num, numb);
        break;
        
        case '*':
        result=mnogity(num, numb);
        break;

        case '/':
        result=dilut(num, numb);
        break;

    default:
        break;
}
console.log(result);




let num1=+prompt('Write 1 number ');

let num2=+prompt('Write 2 number ');

function randomaizer(x,y){
  return Math.floor(Math.random()*(x-y)+y);
}
console.log(randomaizer(num1,num2));

let name=prompt('Enter your name');

let old=+prompt('How old are you?');

let place=prompt('Where you live?');

function user1337(x,y,z) {
    let user={x:name,y:old,z:place};
    return user;
    
    
}
console.log(user1337(name, old, place));

let radok=prompt('Enter somethink ');

function acoc(inputString){
return inputString.split('').reverse().join('');

}

console.log(acoc(radok));

let celcia=+prompt('Enter temperature in celia');

let action=prompt('Enter your action 1 or 2')

function convertCelsiaToFaringate(x){
return x* (9/5) + 32;

}

function convertFaringateToCelsia(y){
return (y-32)*(5/9); 

}

switch (action) {
    case '1':
        console.log(convertCelsiaToFaringate(celcia));
        break;
case '2':
        console.log(convertFaringateToCelsia(celcia));
        break;

    default:
        alert('Try againe dude');
        break;
}


let max1=+prompt('Enter 1 number ');

let max2=+prompt('Enter 2 number');

let max3=+prompt('Enter 3 number');

function maxnumber(x,y,z) {
    if(x>y && x>z){
        return x;
    }
    else if(y>x && y>z){
        return y;
    }
else{return z;};
    
}
console.log(maxnumber(max1,max2,max3));

let net=prompt('Enter texty with little leter');

function downLetter(x){
    return x.toUpperCase();

}
console.log(downLetter(net));

const numberArray=[1,2,3,4,5];

const numberArray1=[3,4,5,4,5,6];

function actionAboutNumber(x) {
   let nuj=0;
    for (let index = 0; index < x.length; index++) {
     nuj=nuj+x[index];
     
        
    }
    return nuj/x.length;
}
console.log(actionAboutNumber(numberArray));

//console.log(actionAboutNumber(numberArray1));


let numbered=+prompt('Enter the width of password');

let password=``;

const numbersOfPassword=('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+');

function randomPassword(length){
   for (let index = 0; index <length; index++) {
    
   
  
    let inferno=Math.floor(Math.random()*numbersOfPassword.length);
    password=password+numbersOfPassword[inferno];
}
return password;
}
console.log(randomPassword(numbered));

let value=+prompt('Enter your value');

let codde=prompt('Enter your code ');

switch (codde) {
    case "jpy":
        
        console.log(142.94,value);


        break;

        case "eur":
            
            console.log(asdssd(0.92, value));
    
    
            break;

            case "jbp" :
                
           
                
        console.log(asdssd(0.78855, value));
        
                break;


    default:
  break;
  
 
}
function asdssd(x,y) {
    return x*y;
    
}




let array=[1,2,3,85,4,5,6,7,8];

let maxelement=array[0];

function maxelem(x) {
    


    for (let index = 0; index < x.length; index++) {
          if(maxelement<x[index]){
            maxelement=x[index];
          }
     
        
          
        
    }
    return maxelement;
}
console.log(maxelem(array));

let array1=[1,2,3,4,5,6,7,8];

let array2=[9,10,11,12,13,14];

function takedparams(x,y){
return x.concat(y);


}
console.log(takedparams(array1, array2));

let numb1=+prompt('Enter the number');

let numb2=+prompt('Enter the second number');

const maxnumber=(a,b)=>{
if(a>b){return a;}
return b;


}
console.log(maxnumber(numb1, numb2));

const sayhi=()=>console.log('Hi');
sayhi();*/

let num1=+prompt('Enter number');

const number=a=>a*2;

console.log(number(num1));














