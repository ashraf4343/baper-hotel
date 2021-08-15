document.getElementById('deposit-button').addEventListener('click',function(){
   let depositInput= document.getElementById('deposit-input');
   let newDepositAmmountText = depositInput.value;
   let newDepositAmount = parseFloat(newDepositAmmountText);




//    console.log(depositAmmount)

   let depositTotal= document.getElementById('deposit-total');


 let previousDepositText= depositTotal.innerText;
 let previousDepositAmount = parseFloat(previousDepositText);

 let newDepositTotal = previousDepositAmount+ newDepositAmount;




   depositTotal.innerText= newDepositTotal;

//    update account balance

let balanceTotal= document.getElementById('balance-total');

let balanceTotalText=balanceTotal.innerText;

let previousBalanceTotal= parseFloat(balanceTotalText);
let newBalanceTotal= previousBalanceTotal+newDepositAmount;
balanceTotal.innerText=newBalanceTotal;



// clear input  deposit field
   depositInput.value ='';
 });
//  handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function(){
    let withdrawInput= document.getElementById('withdraw-input');
    let withdrawAmountText=withdrawInput.value;

    let newWithdrawAmount =parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);


    // set with draw total

    let withdrawTotal = document.getElementById('withdraw-total');
    let previousWithdrawText =withdrawTotal.innerText;
    let previousWithdrawTotal =parseFloat(previousWithdrawText);
    let newWithdrawTotal = previousWithdrawTotal+newWithdrawAmount;
    withdrawTotal.innerText=newWithdrawTotal;

    // update balance
    let balanceTotal= document.getElementById('balance-total');

    let previousBalanceText= balanceTotal.innerText;
    let previousBalanceTotal =parseFloat(previousBalanceText);
    let newBalanceTotal= previousBalanceTotal-newWithdrawAmount;

    balanceTotal.innerText=newBalanceTotal;



// clear withdraw input
    withdrawInput.value ='';
})