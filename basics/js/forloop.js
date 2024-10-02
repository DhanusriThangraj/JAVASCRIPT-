console.log("dhanusri");
// forloop

for(myvariable=0; myvariable<10; myvariable=myvariable+1){
    console.log(myvariable);
}
let heros=['iron man','spiderman','dhanu','thor','ant man'];
for(myvariable=0; myvariable < heros.length; myvariable=myvariable+1){
    console.log(heros[myvariable]);
}

for(i=0; i<100; i++){
    console.log(i+1);
}
for(i=0; i<5; i++){
    console.log('dhanu')
}

// todo applications
let myTodos=['go to gym','record 20 videos todey','buy a phone'];
// adding in the end
myTodos.push('come back');
// adding in the start
myTodos.unshift('comeback');
myTodos.forEach(function(Todos,position){
    console.log(`${position+1}.${Todos}`);
});


let todo=['go to gym','record 20 videos todey','buy a phone'];
todo.push("come back");
todo.push("record 20 videos todey','buy a phone");
todo.push("goback");
todo.forEach(function(todo,position) {
    console.log(`${position+1}.${todo}`);    
});
for(i=0; i<todo.length; i++){
    console.log(`${i+1}.${todo}`);
};

//generating the random number
console.log(Math.random());
console.log(Math.floor(Math.random()*5+1));

let upper=100;
let lower=0;
console.log(Math.floor(Math.random()*(upper-lower+1)+0)); 

// arrow function
let myTodo=[{
    title:'go to gym',
    isDone:true
  },{
    title:'Record 20 videos',
    isDone:true
  },{
    title:'buy a phone',
    isDone:false
  }];
  let filter = myTodo.filter((todo)=>todo.isDone==true)
  console.log(filter);

  let phone={
    title:'Samsung',
    price:'200000',
    desp:function(){
        return `This Phone Price is ${this.price}`
    }
  }
  console.log(phone.desp());