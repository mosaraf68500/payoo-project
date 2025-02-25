
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'

document.getElementById('login-btn')
.addEventListener('click', function(e){
    e.preventDefault()
    const accountNumber=document.getElementById('account-number').value;
    const password=document.getElementById('password').value;

    if(accountNumber.length>=11){
        if(password==='1234'){
            console.log('sob kicu thik ase');
            Swal.fire({
                title: "verification successfully!",
                icon: "success",
                draggable: true
              });
        }
        else{
            console.log('pin thik nai')
            Swal.fire({
                title: 'Error!',
                text: 'Please Enter valided password!',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        }
    }
    else{
        console.log('account thik nai')
        Swal.fire({
            title: 'Error!',
            text: 'Please Enter valided account Numbers!',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
    }
    
})