// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let saveNm = document.getElementById("save-nm")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let saveStr = count + " - "
    saveNm.textContent += saveStr
    countEl.textContent = 0
    count = 0
}

function clearBtn() {
    countEl.textContent = 0
    count = 0
    saveNm.textContent = ""

}
