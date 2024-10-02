let myObjects={
    name:'Dhanusri',
    class:'4th year',
    department:'ECE',
    medium:'English',
}
myObjects.department='Electronics and communication engineering'
console.log(myObjects.name);
console.log(myObjects.medium);
console.log(`My name is ${myObjects.name} .I am studying ${myObjects.class} in the department of ${myObjects.department}`);
console.log(this);


// username and password checking basics in JS
let email = 'dhanusriakil@gmail.com';
let pass= '1234567';
console.log(email.toLowerCase());
console.log(email.includes('gmail.com'));

function emailCheck (user){
    if (user.includes('@')){
        return true;
    } else {
        return false;   
}
}
console.log(emailCheck(email));

function passcheck(pass){
    if ((pass.includes('1234')) && (pass.length > 6))
        {
        return true;
    } else {
        return false;
    }
}
console.log(passcheck(pass));