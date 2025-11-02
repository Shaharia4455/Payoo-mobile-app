
const validPin = 1234

// function to get value

function getInputValueNum(id){
    const inputFild = document.getElementById(id).value
    const inputFildValue = parseInt(inputFild)
    return inputFildValue
}

function getInputValue(id){
    const inputFildValue = document.getElementById(id).value
    return inputFildValue
}

// function to get innerText

function getInnerText(id){
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNum = parseInt(elementValue)
    return elementValueNum
}

// function to set innerText

function setInnerText(value){
    const availableBalance = document.getElementById("available-balance")
     availableBalance.innerText = value

}

// function to get cards toggling 
function togglingCardHandle(id){
    const forms = document.getElementsByClassName("form")
    
     for(const from of forms){
        from.style.display = "none"
     }

     document.getElementById(id).style.display = "block"
}

//  add money from button

document.getElementById("add-money").addEventListener("click", function(e){
    e.preventDefault()

    const bank = getInputValue("bank") 
    const accountNumberAdd = getInputValue ("account-number")
    const addAmount = getInputValueNum("add-amount")
    const addPin = getInputValueNum("add-pin")

    const availableBalance = getInnerText("available-balance")

    if(accountNumberAdd.length < 11 ){
        alert("Please provide the valid account Number")
        return;
    }

    if(addPin != validPin){
        alert("Please provide the valid Pin Number")
        return;  
    }

    const toatalNewAvailableBalance = addAmount + availableBalance 

    setInnerText(toatalNewAvailableBalance)

})

//  Cash Out from button
document.getElementById("cash-out-btn").addEventListener("click", function(e){
    e.preventDefault()

    const agentNumber = getInputValue("agent-number")
    const cashOutAmount = getInputValueNum("cash-out-amount")
    const cashOutPin = getInputValueNum("cash-out-pin")

    const availableBalance = getInnerText("available-balance")

    if(agentNumber.length < 11 ){
        alert("Please provide the valid account Number")
        return;
    }

    if(cashOutPin != validPin){
        alert("Please provide the valid Pin Number")
        return;  
    }

    const toatalNewAvailableBalance = availableBalance - cashOutAmount

    setInnerText(toatalNewAvailableBalance) 

})

// *** toggling feature ***
// add money card click
document.getElementById("add-money-card").addEventListener("click", function(){

    togglingCardHandle("add-money-from-section")
})

// Cash Out card click
document.getElementById("cash-out-card").addEventListener("click", function(){

    togglingCardHandle("cash-out-from-section")
})

// Transfer money card click
document.getElementById("transfer-money-card").addEventListener("click", function(){

    togglingCardHandle("transfer-money-from-section")   
})

// Cash Out card click
document.getElementById("get-bonus-card").addEventListener("click", function(){

    togglingCardHandle("get-bonus-from-section")
})

// Cash Out card click
document.getElementById("pay-bill-card").addEventListener("click", function(){

    togglingCardHandle("pay-bill-from-section")
})