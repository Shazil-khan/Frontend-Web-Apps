
let count=0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(countEl)

function increment() {
    count = count + 1
    countEl.innerText = count
    
}
function save()
{
    if(count!=0){
    let countstr = count + " - "
    saveEl.textContent += countstr
    count=0
    countEl.textContent = count}
}
function Decrement() {
    if(count>0){
    count = count- 1}
    countEl.innerText = count
}
