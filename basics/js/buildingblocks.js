let mytodos =[];
mytodos.push('Go to gym');
mytodos.push('record the songs');
mytodos.push('welcome home');
mytodos.push('buy a car');
console.log(mytodos);
let findIndex=mytodos.findIndex(function(todo){
    return todo='Go to gym';
})
console.log(findIndex);

// let findtodo = function(todolist,searchitem){
//   let result=todolist.findIndex(function(todo){
//     return todo.toLowerCase() == searchitem.toLowerCase()
//   })
//   return result;
// }
// console.log(findtodo(mytodos,'buy a car'));

let findtodo = function(todolist,searchitem){
    let result=todolist.find(function(todo){
      return todo.toLowerCase() == searchitem.toLowerCase()
    })
    return result;
  }
  console.log(findtodo(mytodos,'BUY a Car'));

  // advanced javascript
  // arrow function
  let sayhello = (name) =>{
    return (`hi ${name}`);
  }
  console.log(sayhello('dhanu'));
  
  // minimize the lines
  let heloo = (name) =>  (`hello ${name}`)
  console.log(heloo('dhanusri'));

  // arrow function
let myTodoss=[{
  title:'go to gym',
  isDone:true
},{
  title:'Record 20 videos',
  isDone:true
},{
  title:'buy a phone',
  isDone:false
}];
console.log(myTodoss);
 
let filters = myTodoss.filter((todo)=>{
  console.log(todo.title);
})
console.log(filters);

let filter = myTodoss.filter((todo)=>todo.isDone===true)
console.log(filter);


let phone={
  title:'Samsung',
  price:'200000',
  desp:function(){
      return `This Phone Price is ${this.price}`
  }
}
console.log(phone.desp());