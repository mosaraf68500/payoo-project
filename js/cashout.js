document.getElementById('cashout-btn')
.addEventListener('click',function(e){
    e.preventDefault();
    

const totalMoney=document.getElementById('total-amount').innerText;
const convertedTotalMoney=parseFloat(totalMoney);

const addBalance=document.getElementById('cashout-amount').value;
const convertedAddBalance=parseFloat(addBalance);

const pin=document.getElementById('cashout-pin').value;
const convertedPin=parseInt(pin);

if(convertedPin===1234){
    const remainAmount=convertedTotalMoney - convertedAddBalance;
    // console.log(sum)
    document.getElementById('total-amount').innerText=remainAmount;
}
else{
    alert('please valited pin number')
}


})

