// ----------function call -----------
document.getElementById('calculate-btn').addEventListener('click', function(){
    expenses();
    balance();  
    remainingBalance()  
});

document.getElementById('save-btn').addEventListener('click', function(){
    savingTotal()
    remainingBalance()
});


// ---------Expenses--------------

function expenses(){
    const  foodInput = document.getElementById('food-input').value;
    const  rentInput = document.getElementById('rent-input').value;
    const  clothesInput = document.getElementById('clothes-input').value;
    const  totalAmount = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothesInput);
     const totalExpenses = document.getElementById('total-expenses');
      totalExpenses.innerText = totalAmount; 
    return totalAmount;
}





//---------------balance part ------------------

function balance(){
    let balanceAmount = expenses();
    const incomeInput = document.getElementById('income-input');
    console.log(incomeInput);
    const incomeAmount = incomeInput.value;
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceAmount = totalBalance.innerText;
    totalBalance.innerText = parseInt(incomeAmount) - parseInt(balanceAmount);  

}

  //  ------------Saving part -------------

function savingTotal(){
    const saveIncomeInput = document.getElementById('income-input').value;
    const saveIncomeInputAmount = parseInt(saveIncomeInput);

    const savingValue = document.getElementById('saving-value').value;
    const savingInputValue = parseFloat(savingValue);

    const saveInput = document.getElementById('saving-amount');
    let saveIncomeAmount = saveInput.innerText;
    saveInput.innerText = (saveIncomeInputAmount * savingInputValue) / 100; 
    return saveIncomeAmount;
}

//-----------  Remaining Part-----------------

function remainingBalance(){
    let balanceTotalAmount = balance();
    let savingTotalAmount = savingTotal();
    let remainingBalanceInput = document.getElementById('remaining-balance'); 
    let remainingTotalAmount = remainingBalanceInput.innerText;
    remainingBalanceInput.innerText = parseFloat(balanceTotalAmount) - parseFloat(savingTotalAmount);
    return remainingTotalAmount;
}














// if(typeof(foodInput)=='string' || typeof(rentInput)=='string' || typeof(clothesInput)=='string' ){

// }



// document.getElementById('calculate-btn').addEventListener('click', function(){

    
    
      
//         const  foodInput = document.getElementById('food-input').value;
//         const  rentInput = document.getElementById('rent-input').value;
//         const  clothesInput = document.getElementById('clothes-input').value;
//         const  totalAmount = parseInt(foodInput) + parseInt(rentInput) + parseInt(clothesInput);
//          const totalExpenses = document.getElementById('total-expenses');
//           totalExpenses.innerText = totalAmount; 
        
          
//       const incomeInput = document.getElementById('income-input');
//       const incomeAmount = incomeInput.value;
//       const totalBalance = document.getElementById('total-balance');
//       const totalBalanceAmount = totalBalance.innerText;
//       totalBalance.innerText = parseInt(incomeAmount) - parseInt(totalAmount);

// })



