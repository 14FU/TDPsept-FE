"use strict";
// //DOM MANIPULATION
// const title = document.createElement("h1");//creating a h1 tag

// title.innerText = "Let's manipulate the DOM";//adding the text inbetween the h1 tag

// document.body.appendChild(title);//the h1 tag is going in the body tag

// const div = document.getElementById("myDiv");//finding an element with id="myDiv"

// console.log("target div:", div);//prints details of the tag

// const newButton = document.createElement("button");//creates a button element

// newButton.innerText = "PRESS ME";//update text of the button element

// div.prepend(newButton);//adds the button to the div we got


// const secondDiv = document.querySelector("body > div.divNoId");

// console.log(secondDiv);

// const para = document.querySelector("body > div.divNoId > p");
// para.innerText = "hello";

// para

// //event handling
// const greet = () => console.log("Hello World!");

// newButton.onclick = greet;
// newButton.addEventListener("click",greet);

//qa task on dom manipluation task one 
// const title= document.createElement("h1");
// title.innerText= "is this working?";
// document.body.appendChild(title);
// const para= document.createElement("h6","color:crimson");
// para.innerText= "this shuodl be anothe rparagraph";
// document.body.appendChild(para);
// document.body.removeChild(title);
// document.body.replaceChild(para,title);

//extension- create para graph tag
const makePara = () => {
    const newPara = document.createElement("p");
    newPara.id = "para1id";
    newPara.innerText ="im trying to do the extension";
    document.body.appendChild(newPara);
}
makePara();//have to call the function to make it work

// change textbox 
const changegepara = () => {
    const existingpara = document.getElementById("para1id");
    //console.log(existingpara);// the console.logs are not mandatory
    const changes = document.getElementById("paraText").value;
    //console.log(changes);
    existingpara.innerText= changes;
}
changegepara();

// delete paragraph
const deletep = () =>{
    const existpara = document.getElementById("para1id");
    existpara.remove();
}
 //deletep(); 