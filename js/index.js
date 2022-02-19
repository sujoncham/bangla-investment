function calculate(){
    const incomeInput = document.getElementById('income-input');
    const incomeValue = parseInt(incomeInput.value);
    // console.log(incomeValue);
    const foodInput = document.getElementById('food-input');
    const foodValue = parseInt(foodInput.value);
    const rentInput = document.getElementById('rent-input');
    const rentValue = parseInt(rentInput.value);
    const clotheInput = document.getElementById('clothe-input');
    const clotheValue = parseInt(clotheInput.value);
    const totalCost = parseInt(foodInput.value)+ parseInt(rentInput.value) +parseInt(clotheInput.value);
    const totalBalance = parseInt(incomeInput.value) -totalCost;
}