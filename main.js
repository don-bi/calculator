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