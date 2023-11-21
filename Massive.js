'use strict'
let arr1=["Mango","Apple","Pineapple"];
console.log(arr1[2]);

arr1[2]='Lemon';
console.log(arr1[2]);

arr1[3]='Coconut';
console.log(arr1);

console.log(arr1.length);
console.log(arr1[arr1.length -1]);
//Функція яка добавляє елемент в кінець масиву-Push//
arr1.push('Pomela');
//Функція яка видаляє елемент в кінці масиву-Pop//
console.log(arr1.pop());
console.log(arr1);

//Функція яка видаляє перший елемент масиву(0 індекс)-Shift//
console.log(arr1.shift());
console.log(arr1);
//Функція яка добавляє перший елемент масиву(0 індекс)-UnShift//
console.log(arr1.unshift('grapfruit'));
console.log(arr1);

console.log(arr1.push('Orange','Banana'));
console.log(arr1);

for (let index = 3; index < arr1.length; index++) {
    
    console.log(arr1[index]);
    
}   

for (let i of arr1) {
    console.log(i);


}

let values=[1,2,3,4,5];

for (let i of values) {
    i*=2;
    

    
}
console.log(values);

for (let index = 0; index < values.length; index++) {
    values[index]*=2;
    
    
}
console.log(values);
