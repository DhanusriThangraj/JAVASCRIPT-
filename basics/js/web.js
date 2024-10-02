console.log(document.body);

document.title ='dhanusri'
console.log(document.title);

let mytag=document.getElementById('idone');
console.log(document.getElementsByClassName('classone'));
console.log(mytag);

let Mytag = document.querySelectorAll('.classone');
console.log(Mytag[0]);

let mytags = document.querySelector("p");
mytags.textContent='Changed using JS';

let MYTAG = document.querySelectorAll('p');
console.log(MYTAG);

// changed the p tags into the given textcontent
let MYTAGS = document.querySelectorAll('p');
MYTAGS.forEach((p)=>{
    p.textContent="changed using loops in JS"
    
})
console.log(MYTAGS);

// creating the new element
let newTag= document.createElement('p');
newTag.textContent='Dhanusri'
document.querySelector('body').appendChild(newTag);

// eventlisenter ADD TO CHART BUTTON
document.querySelector('button').addEventListener('click',()=>{
    console.log('button is clicked');
  })
  

// input tracking SEARCH
document.querySelector('#idtwo').addEventListener('input' , (event) =>{
    console.log(event.target.value);

})

function search(){
    let myValue = document.getElementById('idtwo2').value

    if (myValue=='fuck'){
        console.log('you cant search this kind of word');
    }else{
        console.log(myValue);
    }
 // changing the CSS

let myvalue = document.querySelector('body')
myvalue.style.background='red';
}
function revert(){
    let myValue=document.querySelector("h1")
    myValue.style.background='pink';
    document.querySelector

    let ul = document.querySelector('ul')
    let newli = document.createElement('li')
    newli.textContent='create by JS'
    ul.appendChild(newli)
}