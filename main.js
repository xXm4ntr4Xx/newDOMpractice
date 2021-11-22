let pennies = 1;
const output = document.querySelector("output");
//set the onclick fucntion
function handleClick() {
  console.log("Im just to prove it's working!");
   pennies *= 2;
  // Double the number of pennies
  output.innerText = `${pennies} Penny`;
  // display in the output tag
  return pennies;
}

// select and change the text
let quoteElement = document.querySelector(".quote");
quoteElement.innerText ="Welcome to the jungle";

//select the h1 and change the style decoration
let headerOne = document.querySelector("h1");
headerOne.style.textDecoration = "underline";

//extra tips list
let extraTips = [
  "Keep your pennies is a glass jar",
  "Save money buy not eating!",
  "Don't let your partner know...",
];

//creating new elements
let elementList = document.querySelector("#tips-list");
for(i=0;i<extraTips.length; i++) {
  //create the new li item
   let newLi = document.createElement('li');
   //set the li to be the current tip ===[i]
   newLi.innerText = extraTips[i]
   //append the new list as child of the unorder list(elementList)
   elementList.appendChild(newLi);
  }
  
//task 5 - 6 
//change the title of the website to a new value and wrap into a function
  function newValue(){
     return document.title ="This is a new title";
 
  }
  
// task-6 call the function adn add the onclick event on button with the designated id
  let button = document.querySelector("#click-me");
  button.addEventListener("click", newValue);
// task-7 
// add an input field 
  let inputFile = document.createElement("input");
      inputFile.setAttribute("id","inputB")
  

// and add new button 
  let newButton = document.createElement("button");
      newButton.setAttribute("id","newBtn1")
      newButton.innerHTML="Click me";

// add the new 2 element after the h2
  let heading2 = document.querySelectorAll("h2")[0];
  heading2.appendChild(inputFile);
  heading2.appendChild(newButton);

  // select the heading 1
  let heading1 = document.querySelector("h1");
  newButton.addEventListener("click",clickButton)
  
//function that point the h1 and change the text value based on the inputFile 
  function clickButton(){
    heading1.innerText = inputFile.value;
  }