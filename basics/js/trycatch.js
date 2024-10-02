console.log(typeof 45);
console.log(typeof "dhanu");
// 
let covertRupees =(dollar)=>{
    return dollar*69;
}
console.log(covertRupees(45));  
// 
let convertrupees=(dollar)=>{
    if(typeof dollar=='number'){
        return dollar*69
    } else{
        throw Error('Amount need to be numbers')
    }
}
try{
    console.log(convertrupees(5465));
} catch ( error){
    console.error(error);
}

console.log("this line will not show if program crashes");
