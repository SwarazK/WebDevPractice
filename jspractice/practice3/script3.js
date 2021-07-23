let url_arrray = [];
let input_element = document.getElementById("input-field");
let ulist_element = document.getElementById("url-ul");
// let body_element = document.getElementsByTagName("body")[0];
let lis = "";

function saveInput(){
    if(input_element.value !== ""){
        url_arrray.push(input_element.value);
        lis += `<li> <a href='${input_element.value}'>${input_element.value}</a></li>`;
        input_element.value = "";
    }
    else alert("Input field empty!!");
    
}

function disp(){
    ulist_element.innerHTML = lis;
}

// body_element.innerHTML += "<button onclick = 'buy()'>Buy!</button>";
// function buy(){
//     body_element.innerHTML += "<p> Sorry you cant do that</p>";
// }
