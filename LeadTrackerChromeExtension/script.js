let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
let delbtn = document.getElementById("del-btn")
let elEl = document.getElementById("ul-el")

// localStorage.setItem("myLeads", JSON.stringify(myLeads))
// localStorage.setItem("myLeads", "www.google.com")
// console.log(localStorage.getItem("myLeads"))
// localStorage.setItem
// localStorage.getItem
// localStorage.clear()
// both key and value needs to be string
// how to store array in local storgae ?
// myLeads = JSON.parse(myLeads)


// WORKING OF THE INPUT BUTTON
inputBtn.addEventListener("click", function() {

  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render_leads(myLeads)
  // console.log(localStorage.getItem("myLeads"))
})

// WORKING OF THE DELETE BUTTON
delbtn.addEventListener("dblclick", function() {
  localStorage.clear()
  myLeads = []
  render_leads(myLeads)
})
// getting the Leads from local storage
// storing it in a variable LeadsfromLocalStorage
// log out the variable

const leadsfromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// checking if the leadsfromLocalStorage is truthy
// if true set myLeads to its value and call render leads
if (leadsfromLocalStorage) {
  myLeads = leadsfromLocalStorage
  render_leads(myLeads)
}

// ITS RRENDER LEADS ON THE BROWSER
function render_leads(leads) {
  let mystring = ""
  for (let i = 0; i < leads.length; i++) {
    mystring = mystring + `
    <li><a target='_blank' href='${leads[i]}'>
    ${leads[i]}
    </a>
    </li>`
  }
  elEl.innerHTML = mystring
}