console.log("Dhanusri");
let one="one";
let two=("two");
let heros=['iron man','spiderman',12345,'dhanu','thor','ant man'];
console.log(heros);
console.log(heros[2]);
console.log("dhanu")
console.log(heros.length);
console.log("We have "  + heros.length+   " superheroes");
console.log(`We have ${heros.length} superheroes`);

// functions
// function sayHello() {
//     console.log('hi dhanu');
// }
// sayHello();


function sayHello(name) {
    console.log(`hi ${name}`);
}
sayHello('dhanu');
function fullname(firstname,secondname){
    console.log(`${firstname} ${secondname}`);
}
fullname('Dhanu',"T");

 function addtwonumbers(num1,num2){
    console.log(num1+num2);
 }
 addtwonumbers(1,3);

//  new method
 
 let saybye=function(name){
    console.log(`hi ${name}`);
 }
 saybye("dhanusri");

//  for each
let heroes=['Iron man','spiderman',12345,'dhanu','thor','ant man'];
heroes.forEach( function(hero){
    console.log(hero);
});
heroes.forEach( function (hero,position){
    console.log(`${position+1} ${hero} `);
}); 

let days=['sun','mon','tue','wed','thur','fri','sat'];
days.forEach (function(day,position){
    console.log(`${position+1} ${day}`);
} );

// for loop
// for(declare,condition,increase/decrease)
let fruits=['mango','apple','grape','orange','strawberry','pomogranate'];


for (myVariable=0; myVariable<10; myVariable=myVariable+1 ){
    console.log(myVariable);
}





