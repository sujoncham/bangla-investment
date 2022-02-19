
// this is income and expences part 
function calculate(){
    // incomeInput
    const incomeInput = document.getElementById('income-input');
    // expence Input
    const foodInput = document.getElementById('food-input');
    const rentInput = document.getElementById('rent-input');
    const clotheInput = document.getElementById('clothe-input');
    // total cost balance
    const totalCost = parseInt(foodInput.value) + parseInt(rentInput.value) + parseInt(clotheInput.value);

    const totalBalance = parseInt(incomeInput.value) - totalCost;
    // showing balance
    document.getElementById('expence-total').innerText = totalCost;
    document.getElementById('balance-total').innerText = totalBalance;
}

// this is percentage part 
function save(){
    // income
    const incomeInput = document.getElementById('income-input');
    const incomeValue = parseInt(incomeInput.value);
    // main balance
    const balance = document.getElementById('balance-total');
    const mainValue = parseInt(balance.innerText);
    // percentage input 
    const saveInputh = document.getElementById('save-input');
    const saveValue = parseInt(saveInputh.value);
    // percentage innerText value 
    const saveAmount = document.getElementById('save-amount')
    const amountValue = parseInt(saveAmount.innerText);

    const save = saveValue + amountValue;
    // percentage calculate
    const savePercentage = save/100;
    const totalSave = incomeValue*savePercentage;
    // totalSave
    document.getElementById('save-amount').innerText = totalSave;
    // remaining balance
    document.getElementById('remain-balance').innerText = mainValue - totalSave;
}
