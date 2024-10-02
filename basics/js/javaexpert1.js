class user{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
        

    }

    getusername(){
        console.log(this.firstname+this.lastname);
        // another method
         return`USERNAME is ${this.firstname} ${this.lastname}`;
    }
    editUserName(firstname){
        this.firstname=firstname

    }
    
}
class Teacher extends user{
// the copy of user is inside the teacher but not visible to eyes
}
// getter
let user1=new user("JAVA","SCRIPT");
user1.getusername();
// setter or editor
user1.editUserName("java");
user=user1.getusername();
console.log(user);
// teacher
let teacher =new Teacher("as","as");
teachername = teacher.getusername();
console.log(teachername);