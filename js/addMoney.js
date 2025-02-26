document.getElementById('add-money-btn')
.addEventListener('click',function(e){
    e.preventDefault();
    

const totalMoney=document.getElementById('total-amount').innerText;
const convertedTotalMoney=parseFloat(totalMoney);

const addBalance=document.getElementById('add-balance').value;
const convertedAddBalance=parseFloat(addBalance);

const pin=document.getElementById('pin').value;
const convertedPin=parseInt(pin);

if(convertedPin===1234){
    const sum=convertedTotalMoney+convertedAddBalance;
    // console.log(sum)
    document.getElementById('total-amount').innerText=sum;
}
else{
    alert('please valited pin number')
}


})

