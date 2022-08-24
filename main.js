//variables for storing 
let answer = ``;
let currentnum = `0`;
let currentop = ``;


//vars containing the rows 
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");

//adds the numbers buttons to the calculator
setNumbers(one,7,9);
setNumbers(two,4,6);
setNumbers(three,1,3);
setNumbers(four,0,0);

//function to add number buttons to each row
function setNumbers(row, start, end) {
    for (start; start <= end; start++){
        const btn = document.createElement("button");
        btn.classList.add("number");
        btn.textContent = `${start}`;
        row.appendChild(btn);
    }
}

//function to add the other buttons
function addButton(row, name, text){
    const btn = document.createElement("button");
    btn.classList.add(`${name}`);
    btn.textContent = `${text}`;
    row.appendChild(btn);
}

//adds the rest of the buttons
addButton(one, "multiply", "×");
addButton(two, "divide", "÷");
addButton(three, "add", "+");
addButton(four, "decimal", ".");
addButton(four, "equal", "=");
addButton(four, "subtract", "-");

//does intial display update
updateDisplay();

function updateDisplay(){
    const screeninput = document.querySelector(".input");
    screeninput.textContent = currentnum;
    const screenans = document.querySelector(".answer");
    screenans.textContent = answer;
}


function includeNum(e){
    if (currentnum.length < 15) { 
        currentnum += this.textContent;
        updateDisplay();
    }
    this.classList.add("pressed");
}

//adds eventlistener for when numbers are pressed to add it to the input string
const numbuttons = document.querySelectorAll(".number");
numbuttons.forEach(num => num.addEventListener("click",includeNum));


//removes pressed from buttons after animation
const btns = document.querySelectorAll("button");
btns.forEach(btn => btn.addEventListener("transitionend", function(){
    btn.classList.remove("pressed");
}))