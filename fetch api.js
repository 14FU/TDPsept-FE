

axios.get("https://reqres.in/api/users")
    .then(res => console.log(res))
    .catch(err => console.erroe(err));

// get = read , pulling the info 
axios.post("https://reqres.in/api/users", {
    "name": "morpheus",
    "job": "leader"
})
    .then(res => console.log(res))
    .catch(err => console.erroe(err));

axios.post("https://reqres.in/api/users", {
    "email": "eve.holt@reqres.inheus",
    "password": "pistol"
})
    .then(res => console.log(res))
    .catch(err => console.erroe(err));

// axios.post("https://reqres.in/api/users")
// const reqBody= {
//     name= "donald"
//     job = "dentist"
// }

//status coddes
//100-199 info
//200 -299 good 
//300- 399 redirect 
//400 - 499 errorn=bad request 
//500 - 599 internal sever (usuallly nothing to do with us )

//ARRAY FUNCTIONS
//type of iteration or loop
// for (let itemss of arrayy) {
//     console.log(itemss);
