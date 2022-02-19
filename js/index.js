
function getInputValue(inputValue){
    let depositInput = document.getElementById(inputValue);
    let depositInputValue = parseFloat(depositInput.value);
    depositInput.value = "";
    return depositInputValue;
}

function updateInputValue(inputFieldId, inputAmount){
    let depoTotal = document.getElementById(inputFieldId);
    let addValue = parseFloat(depoTotal.innerText);
    depoTotal.innerText = inputAmount + addValue;
}

function depositValue(){
    const depositInputValue = getInputValue('deposit-input');
    updateInputValue('depo-total', depositInputValue)
    
    let depoBalance = document.getElementById('depo-balance');
    depoBalance.innerText = depositInputValue + parseFloat(depoBalance.innerText);
}

function widrowValue(){
    const windrowInputValue = getInputValue('widrow-input');
    updateInputValue('widrow-total', windrowInputValue)
    
    let depoBalance = document.getElementById('depo-balance');
    depoBalance.innerText = parseFloat(depoBalance.innerText) -  windrowInputValue;
}