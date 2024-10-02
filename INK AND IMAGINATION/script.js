// selecting popupbox
// selcting popoverlay buttom
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox=document.querySelector(".popup-box");
var addpopupbutton=document.querySelector(".add-button");
     
addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
});


// select cancell button
var cancelpopup=document.getElementById("cancel-popup");

cancelpopup.addEventListener("click",function(){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"

 })

//  select container,add-book,book-title-input,book-author-input,book-description-input

container=document.querySelector(".container")
addbook=document.getElementById("add-book")
booktitleinput=document.getElementById("book-title-input")
bookauthorinput=document.getElementById("book-author-input")
bookdescriptioninput=document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML= `<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})
function deletebook(event){
    event.target.parentElement.remove();
}
