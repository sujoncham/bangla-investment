

// this is income and expences part 
function calculate(){
    
          // incomeInput
          const incomeInput = document.getElementById('income-input');
          const incomeValue = parseInt(incomeInput.value);
          // expence Input
          const foodInput = document.getElementById('food-input');
          const foodValue = parseInt(foodInput.value);
          const rentInput = document.getElementById('rent-input');
          const rentValue = parseInt(rentInput.value)
          const clotheInput = document.getElementById('clothe-input');
          const clotheValue = parseInt(clotheInput.value)
          let text;
          if((isNaN(incomeValue) || incomeValue < 0) && (isNaN(foodValue) || foodValue < 0) && (isNaN(rentValue) || rentValue < 0) && (isNaN(clotheValue) || clotheValue > 0)){
            text = "input invalid";
          } else{
            // total cost balance
          const totalCost = foodValue + rentValue + clotheValue;
      
          const totalBalance = incomeValue- totalCost;
               // showing balance
          document.getElementById('expence-total').innerText = totalCost;
          document.getElementById('balance-total').innerText = totalBalance;
          text = "input valid";
          
          }
          document.getElementById('warning-text').innerText = text;
          
    
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
    if(typeof (saveValue.value)!='number'){
        alert("hello");
    } else{
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
    
}
