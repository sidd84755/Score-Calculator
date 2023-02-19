let ansCount = document.getElementById("countHome")
let answerCount = document.getElementById("countGuest")
let numCount = 0
let numGCount = 0
let saveEl = document.getElementById("save-el")

function increment1(){
    numCount += 1
    ansCount.innerHTML = numCount
}
function increment2(){
    numCount += 2
    ansCount.innerHTML = numCount
}
function increment3(){
    numCount += 3
    ansCount.innerHTML = numCount
}
function incrementG1(){
    numGCount += 1
    answerCount.innerHTML = numGCount
}
function incrementG2(){
    numGCount += 2
    answerCount.innerHTML = numGCount
}
function incrementG3(){
    numGCount += 3
    answerCount.innerHTML = numGCount
}
// function save(){
//     saveEl.innerText += numCount
//     ansCount.innerText = 0
//     numCount = 0
// }
function reset(){
    ansCount.innerText = 0
    answerCount.innerText = 0
    numCount = 0
    numGCount = 0
}




