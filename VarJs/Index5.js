const calc=document.getElementById('calc');

console.dir(calc);

calc.addEventListener('click',calculate);

function showMessageError() 
{alert('Pleas enter write correct line');}

function calculate(){let data=prompt('Hi I am calculator, pleas enter you expresion','');

if(data===null){alert('Error!!0_0');}
else{data=data.replace(/,/g,".");
try{
let result=eval(data);
if(data===''){alert('You dont write anysynck');}
else if(result===Infinity||result===-Infinity){alert('you cant division to 0');}
else if(isNaN(result))
{alert('Enter right line');}
else{alert(`i know the number will be:${result}`);}}
catch(Err){showMessageError();}}};



