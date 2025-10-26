
document.getElementById("add-money").addEventListener("click", function(e){
    e.preventDefault()

    const bank = document.getElementById("bank").value 
    const accountNumberAdd = document.getElementById("account-number").value
    const addAmount = parseInt(document.getElementById("add-amount").value)
    const addPin =document.getElementById("add-pin").value

    const availableBalance =parseInt(document.getElementById("available-balance").innerText)

    const toatalNewAvailableBalance = addAmount + availableBalance 

    document.getElementById("available-balance").innerText  = toatalNewAvailableBalance

})