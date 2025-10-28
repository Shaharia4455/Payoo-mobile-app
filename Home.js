
const validPin = 1234

//  add money from button

document.getElementById("add-money").addEventListener("click", function(e){
    e.preventDefault()

    const bank = document.getElementById("bank").value 
    const accountNumberAdd = document.getElementById("account-number").value
    const addAmount = parseInt(document.getElementById("add-amount").value)
    const addPin = parseInt(document.getElementById("add-pin").value)

    const availableBalance =parseInt(document.getElementById("available-balance").innerText)

    if(accountNumberAdd.length < 11 ){
        alert("Please provide the valid account Number")
        return;
    }

    if(addPin != validPin){
        alert("Please provide the valid Pin Number")
        return;  
    }

    const toatalNewAvailableBalance = addAmount + availableBalance 

    document.getElementById("available-balance").innerText  = toatalNewAvailableBalance

})

//  Cash Out from button
document.getElementById("cash-out-btn").addEventListener("click", function(e){
    e.preventDefault()

    const agentNumber = document.getElementById("agent-number").value 
    const cashOutAmount = parseInt(document.getElementById("cash-out-amount").value)
    const cashOutPin = parseInt(document.getElementById("cash-out-pin").value)

    const availableBalance =parseInt(document.getElementById("available-balance").innerText)
    console.log(availableBalance, agentNumber, cashOutAmount, cashOutPin)

    if(agentNumber.length < 11 ){
        alert("Please provide the valid account Number")
        return;
    }

    if(cashOutPin != validPin){
        alert("Please provide the valid Pin Number")
        return;  
    }

    const toatalNewAvailableBalance = availableBalance - cashOutAmount
    console.log(toatalNewAvailableBalance)

    document.getElementById("available-balance").innerText  = toatalNewAvailableBalance 

})

// *** toggling feature ***
// add money card click

document.getElementById("add-money-card").addEventListener("click", function(){

    document.getElementById("cash-out-from-section").style.display = "none"
    document.getElementById("add-money-from-section").style.display = "block"

})

// Cash Out card click

document.getElementById("cash-out-card").addEventListener("click", function(){

    document.getElementById("add-money-from-section").style.display = "none"
    document.getElementById("cash-out-from-section").style.display = "block"

})