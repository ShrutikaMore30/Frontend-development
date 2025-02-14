//map
let numbers =[45,7,8];
let newArr=numbers.map((shr)=>{
    return shr*2;
});
console.log(newArr);

//filter
let number =[45,7,8];
let newAr=number.filter((shru)=>{
    return shru % 2==0;
});
console.log(newAr);

//reduce
let arr=[1,2,3,4,5,6,7];
const output=arr.reduce((res,curr)=>{
    return res+curr;
});
console.log(output);


let ar=[1,2,78,4,5,6,7];
const out=ar.reduce((res,curr)=>{
    return res>curr ? res:curr;
});
console.log(`Maximum number is, ${out}!`);


