// understanding this keyword
var person = {
    firstName: "John",
    lastName : "Doe",
    id     : 5566,
    data : this,
    fullName : function() {
        return this;
    }
};

console.log("In a method, this refers to the owner object.",person.fullName())

console.log("Alone, this refers to the global object. : ",this);
console.log("Alone, this refers to the global object. : ",person.data)


function check(){
    console.log('In a function, this refers to the global object.',this);
}
check()

function check1(){
    "use strict";
    console.log('In a function, in strict mode, this is undefined',this);
}
check1()


function test(data){
    console.log('In an event, this refers to the element that received the event. : ',data)
}

let arrFunc = () => {
    console.log("in Arrow Functions, the \"this\" keyword represents  the object that owns the function, \n no matter who calls the function.",this)
}
let btn = document.querySelector('.arrowFunc');
btn.addEventListener('click',arrFunc);
btn.addEventListener('click',check);
// btn.addEventListener('click',()=>{console.log('this : ',this)});
