// create counterE1 variable 
let countEl = document.getElementById("count-el")
// craete saveE1 variable 
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
// create saveNm variable 
let saveNm = document.getElementById("save-nm")

let count = 0




// create increment function
function increment() {
    count += 1
    countEl.textContent = count
}



// create save function
function save() {
    let saveStr = count + " - "
    saveNm.textContent += saveStr
    countEl.textContent = 0
    count = 0
}



// create clear function
function clearBtn() {
    countEl.textContent = 0
    count = 0
    saveNm.textContent = ""

}
