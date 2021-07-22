document.getElementById("counter").innerText = 0;

function increment(){
    let a = Number(document.getElementById("counter").innerText);
    document.getElementById("counter").innerText = a+1;
}

let entries = "";

function save(){
    let temp = document.getElementById("counter").innerText;
    if(document.getElementById("register").textContent === "Previous Entries : ") document.getElementById("register").textContent = document.getElementById("register").textContent + temp;
    else document.getElementById("register").textContent = document.getElementById("register").textContent + " - " + temp ;
    document.getElementById("counter").innerText = 0;
}

// ============================================================

// function countdown(){
//     console.log("Lets countdown!!")
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown()

// countdown()

// ============================================================

// let lap1 = 69
// let lap2 = 50
// let lap3 = 30

// function total_sum(){
//     console.log(lap1+lap2+lap3)
// }

// total_sum()