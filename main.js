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
addButton(one, "operation", "×");
addButton(two, "operation", "÷");
addButton(three, "operation", "+");
addButton(four, "decimal", ".");
addButton(four, "equal", "=");
addButton(four, "operation", "-");

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
        if (currentnum == `0`) {
            currentnum = this.textContent;
        } else {
            currentnum += this.textContent;
        }
        updateDisplay();
    }
    this.classList.add("pressed");
}

function addOperation(e){
    const inputEndsWithOp = currentnum.charAt(currentnum.length-1) == currentop;
    //if the input currently has no operation or ends with one, it will switch the operation to it
    if (currentop == `` || inputEndsWithOp) {
        currentop = this.textContent; 
        if (inputEndsWithOp) {
            currentnum = currentnum.substring(0,currentnum.length-1) + currentop;
        } else {
            currentnum += currentop;
        }
        updateDisplay();
        this.classList.add("pressed");
        console.log("doiing the first");
    } 
    //otherwise, do the expression
    else {
        operate(this.textContent);
        console.log("doing the second");
    }
}

function operate(newop){
    let data = currentnum.split(currentop);
    //for the case when the first number is negative
    if (currentop == currentnum.charAt(0)) {
        data = currentnum.substring(1).split(currentop);
        data[0] = -data[0];
    }
    answer = currentnum;
    const first = parseInt(data[0]);
    const second = parseInt(data[1]);
    //does the operation depending on which one it is
    switch(currentop){
        case `×`: currentnum = first * second; break;
        case `÷`: currentnum = first / second; break;
        case `+`: currentnum = first + second; break;
        case `-`: currentnum = first - second; break;
        default: currentnum = 0;
    }
    currentnum += newop;
    currentop = newop;
    updateDisplay();
}

//adds eventlistener for when numbers are pressed to add it to the input string
const numbuttons = document.querySelectorAll(".number");
numbuttons.forEach(num => num.addEventListener("click",includeNum));

const opbuttons = document.querySelectorAll(".operation");
opbuttons.forEach(op => op.addEventListener("click",addOperation))


//removes pressed from buttons after animation
const btns = document.querySelectorAll("button");
btns.forEach(btn => btn.addEventListener("transitionend", function(){
    btn.classList.remove("pressed");
}))