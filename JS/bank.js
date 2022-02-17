
document.getElementById('calculate-btn').addEventListener('click', function(){
     //Expenses part

    const  foodInput = document.getElementById('food-input').value;
    const  rentInput = document.getElementById('rent-input').value;
    const  clothesInput = document.getElementById('clothes-input').value;
    const  totalAmount = parseInt(foodInput) + parseInt(rentInput) + parseInt(clothesInput);
     const totalExpenses = document.getElementById('total-expenses');
      totalExpenses.innerText = totalAmount;  

        //    calculation part 
    const incomeInput = document.getElementById('income-input');
    const incomeAmount = incomeInput.value;
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceAmount = totalBalance.innerText;
    totalBalance.innerText = parseInt(incomeAmount) - parseInt(totalAmount);



    
});

document.getElementById('save-btn').addEventListener('click', function(){
    const saveIncomeInput = document.getElementById('income-input').value;
    const saveIncomeInputAmount = parseInt(saveIncomeInput);
    
    const saveInput = document.getElementById('saving-amount');
    const saveIncomeAmount = saveInput.innerText;
    saveInput.innerText = (saveIncomeInputAmount * 10) / 100;   
})




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



