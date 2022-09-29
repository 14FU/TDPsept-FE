'use strict'
//qa closure task 1 
let multi = (f) => { // this is the outer proportion 
return (u) =>{
        return f * u;
    };
}
let multi2 = multi (2);
console.log(multi2(20));
let multi3 = multi (3);
console.log(multi3(3));

//qa promsie task 

//1st create the fucntion to make the callback 
const inc = (ten) => {
//2nd this fucntion will display and do the instruction you need it to do 
    alert(`here is the new value ${ten+10}`);
    //3rd displays it 
    console.log(inc)
}
const userinput = (callback) => {
    let val = prompt('please enter your number.');
    callback(val)
}
userinput(inc);200
