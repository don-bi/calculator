//adds the numbers buttons to the calculator
setNumbers(document.querySelector(".one"),7,9);
setNumbers(document.querySelector(".two"),4,6);
setNumbers(document.querySelector(".three"),1,3);
setNumbers(document.querySelector(".four"),0,0);

//function to add number buttons to each row
function setNumbers(row, start, end) {
    for (start; start <= end; start++){
        const btn = document.createElement("button");
        btn.classList.add("number");
        btn.textContent = `${start}`;
        row.appendChild(btn);
    }
}