
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
// function to get cards styles toggling
function togglingCardStyle(id){
    const btns = document.getElementsByClassName("form-btn")
    for(const btn of btns){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]","font-bold","text-[#0874f2]")
        btn.classList.add("border-[#0808081a]","text-[#080808b3]")
    }
    document.getElementById(id).classList.remove("border-[#0808081a]","text-[#080808b3]")
    document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]","font-bold","text-[#0874f2]")
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
    togglingCardStyle("add-money-card")
})

// Cash Out card click
document.getElementById("cash-out-card").addEventListener("click", function(){

    togglingCardHandle("cash-out-from-section")
    togglingCardStyle("cash-out-card")
})

// Transfer money card click
document.getElementById("transfer-money-card").addEventListener("click", function(){

    togglingCardHandle("transfer-money-from-section") 
    togglingCardStyle("transfer-money-card")  
})

// Get bonus card click
document.getElementById("get-bonus-card").addEventListener("click", function(){

    togglingCardHandle("get-bonus-from-section")
    togglingCardStyle("get-bonus-card") 
})

// Pay Bill card click
document.getElementById("pay-bill-card").addEventListener("click", function(){

    togglingCardHandle("pay-bill-from-section")
    togglingCardStyle("pay-bill-card")
})