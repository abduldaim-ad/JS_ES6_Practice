//////////// ARRAYS ///////////////////

//var myCourses = new Array;

var myCourses = ['ABC','DEF','GHI','JKL','ABC'];

// console.log(myCourses);
// console.log(myCourses[myCourses.length-1]);
// console.log(myCourses.length);

// for(var i=0;i<myCourses.length;i++){
//     console.log(myCourses[i]);
// }

// for(let elements in myCourses){
//     console.log(elements);
//     console.log(myCourses[elements]);
// }

// for(let elements of myCourses){
//     console.log(elements);
// }

//ForEach Loop
// myCourses.forEach(function(element, index, array){
//     console.log(element);
// })

//We cannot use break statement in forEach loop
// myCourses.forEach((element,index,array)=>{
//     console.log(element);
// });
//We cannot use this in fat arrow function

///////// STRING FUNCTIONS /////////
console.log(myCourses.indexOf('DEF'));
console.log(myCourses.lastIndexOf('ABC'));
console.log(myCourses.includes('ABC'));
console.log(myCourses.includes('MNO'));

var Prices = [23, 12, 34, 835, 56];

// console.log(Prices.sort()); // String 25>100
// const array_length=Prices.push(343);
// console.log(Prices);
// console.log(array_length);
// Prices.unshift('31');
// console.log(Prices);
// Prices.unshift('1','2');
// console.log(Prices);
// Prices.pop();
// console.log(Prices);
// Prices.shift();
// console.log(Prices);

///////////// CRUD OPERATION USING SPLICE //////////

const months = ['Jan','march','April','June','July'];

// const newMonth = months.splice(months.length,0,'Dec');
// console.log(months);
// console.log(newMonth);

// const index = months.indexOf('April');
// if(index!=-1){
//     const updateMonth = months.splice(index,1,'june');
//     console.log(months);
//     console.log(updateMonth);
// }else{
//     console.log('No such data found');
// }

// if(index!=-1){
//     const updateMonth = months.splice(index,1);
//     console.log(months);
//     console.log(updateMonth);
// }

// if(index!=-1){
//     const updateMonth = months.splice(index,Infinity);
//     console.log(months);
//     console.log(updateMonth);
// }

const array1 = [1, 3, 34, 43, 34];
// let newArr = array1.filter((curElem, index, arr)=>{
//     return curElem > 9;
// });
// num > 9
// let newArr = array1.map((curElem, index, arr)=>{
//     return curElem > 9;
// });

// console.log(array1);
// console.log(newArr);

let newArr = array1.map((curElem, index, arr)=>{
    return `Index no = ${index} and the value is ${curElem} belong to ${arr}`
});
// Map function returns the new array
// Map function does not mutate the original array
console.log(newArr);

let newArrFor = array1.forEach((curElem, index, arr)=>{
    return `Index no = ${index} and the value is ${curElem} belong to ${arr}`
});
console.log(newArrFor);

let arr = [25, 36, 49];

let arrSqr = arr.map((curElem)=> Math.sqrt(curElem))

console.log(arrSqr);

//Chaining Effect
let arr2 = arr.map((curElem)=>curElem*2).filter((curElem)=>curElem > 10)

console.log(arr2);

