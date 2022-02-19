function calculate(){
    const incomeInput = document.getElementById('income-input');
    const incomeValue = parseInt(incomeInput.value);
    // console.log(incomeValue);
    const foodInput = document.getElementById('food-input');
    // const foodValue = parseInt(foodInput.value);
    const rentInput = document.getElementById('rent-input');
    // const rentValue = parseInt(rentInput.value);
    const clotheInput = document.getElementById('clothe-input');
    // const clotheValue = parseInt(clotheInput.value);
    const totalCost = parseInt(foodInput.value) + parseInt(rentInput.value) + parseInt(clotheInput.value);
    const totalBalance = parseInt(incomeInput.value) - totalCost;
    // console.log(totalBalance);

    document.getElementById('income-total').innerText = incomeValue;
    document.getElementById('expence-total').innerText = totalCost;
    document.getElementById('balance-total').innerText = totalBalance;
}

function save(){
    // income
    const incomeInput = document.getElementById('income-input');
    const incomeValue = parseInt(incomeInput.value);

    const balance = document.getElementById('balance-total');
    const mainValue = parseInt(balance.innerText);

    const saveInputh = document.getElementById('save-input');
    const saveValue = parseInt(saveInputh.value);

    const saveAmount = document.getElementById('save-amount')
    const amountValue = parseInt(saveAmount.innerText);

    // console.log(saveValue);
    const save = saveValue + amountValue;
    const savePercentage = save/100;
    const totalSave = incomeValue*savePercentage;
    document.getElementById('save-amount').innerText = totalSave;
    document.getElementById('remain-balance').innerText = mainValue - totalSave;
}
