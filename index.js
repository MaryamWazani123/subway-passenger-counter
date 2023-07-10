let count =0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let text = saveEl.innerText
function increment(){
    count +=   1
    countEl.innerText = count
}


function save(){
    let result = countEl.innerText + " - "
    saveEl.textContent +=  result 
    count = 0
    countEl.textContent = count
}
 
