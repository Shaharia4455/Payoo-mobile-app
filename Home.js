
const validPin = 1234
const coupon = 1234
const TransactionsData = []

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
    if(addAmount <= 0){
        alert("Please valid Amount")
        return;
    }
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

    const data = {
        name:"Add Money",
        date:new Date().toLocaleTimeString()
        }
    TransactionsData.push(data)    
})

//  Cash Out from button
document.getElementById("cash-out-btn").addEventListener("click", function(e){
    e.preventDefault()

    const agentNumber = getInputValue("agent-number")
    const cashOutAmount = getInputValueNum("cash-out-amount")
    const cashOutPin = getInputValueNum("cash-out-pin")

    const availableBalance = getInnerText("available-balance")
    if(cashOutAmount <= 0 || cashOutAmount > availableBalance ){
        alert("Please valid amount")
        return;
    }

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

    const data = {
        name:"Cash Out",
        date:new Date().toLocaleTimeString()
        }
    TransactionsData.push(data)  
})
//  Transfer Money from button
document.getElementById("transfer-money-btn").addEventListener("click", function(e){
    e.preventDefault()

    const accountNumber = getInputValue("Transfer-account-number")
    const transferAmount = getInputValueNum("transfer-money-amount")
    const transferPin = getInputValueNum("transfer-money-pin")

    const availableBalance = getInnerText("available-balance")

    if(transferAmount <= 0 || transferAmount > availableBalance ){
        alert("Please valid amount")
        return;
    }

    if(accountNumber.length < 11 ){
        alert("Please provide the valid account Number")
        return;
    }

    if(transferPin != validPin){
        alert("Please provide the valid Pin Number")
        return;  
    }

    const toatalNewAvailableBalance = availableBalance - transferAmount

    setInnerText(toatalNewAvailableBalance) 
    const data = {
        name:"Transfer Money",
        date:new Date().toLocaleTimeString()
        }
    TransactionsData.push(data)  
})
// Get Bonus
document.getElementById("get-bonus-btn").addEventListener("click", function(e){
    e.preventDefault()
    const bonusCoupon = getInputValueNum("bonus-coupon")
    const availableBalance = getInnerText("available-balance")
    if(bonusCoupon === coupon){
    const toatalNewAvailableBalance = availableBalance + 1000;
    setInnerText(toatalNewAvailableBalance)
    }
    if(bonusCoupon != coupon){
        alert("Please provide the valid Pin Number")
        return;  
    }
        const data = {
        name:"Get Bonus",
        date:new Date().toLocaleTimeString()
        }
    TransactionsData.push(data)  
})
//  Pay Bill from button
document.getElementById("bill-pay-btn").addEventListener("click", function(e){
    e.preventDefault()

    const billerAccountNumber = getInputValue("bill-pay-account")
    const billPayAmount = getInputValueNum("bill-pay-amount")
    const billPayPin = getInputValueNum("bill-pay-pin")

    const availableBalance = getInnerText("available-balance")
        if(billPayAmount <= 0 || billPayAmount > availableBalance ){
        alert("Please valid amount")
        return;
    }

    if(billerAccountNumber.length < 11 ){
        alert("Please provide the valid account Number")
        return;
    }

    if(billPayPin != validPin){
        alert("Please provide the valid Pin Number")
        return;  
    }

    const toatalNewAvailableBalance = availableBalance - billPayAmount

    setInnerText(toatalNewAvailableBalance) 
    const data = {
        name:"Bill Pay",
        date:new Date().toLocaleTimeString()
        }
    TransactionsData.push(data)  
})

// Transactions history
document.getElementById("Transactions-card").addEventListener("click", function(){
    const transactionsContainer = document.getElementById("transactions-container")
    transactionsContainer.innerText = ""
    for ( const data of TransactionsData){
        const div = document.createElement("div")
        div.innerHTML=`
        <div class="mt-5 bg-white p-3 rounded-xl flex justify-between items-center">
            <div class="flex items-center">
              <div class="p-3 rounded-full bg-[#f4f5f7]"><img src="./assets/wallet1.png" alt=""></div>
              <div class="ml-3">
                <h1 class="text-base font-semibold text-[#080808b3]">${data.name}</h1>
                <p class="text-xs text-[#080808b3] mt-[6px]">${data.date}</p>
              </div>
            </div>
            <div class="text-[#080808b3]">
            <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
    </div>
     `
     transactionsContainer.appendChild(div)
    }
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
// Transactions card click
document.getElementById("Transactions-card").addEventListener("click", function(){
    togglingCardHandle("transactions-section")
    togglingCardStyle("Transactions-card")

})