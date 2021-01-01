let timeout;
let password = document.getElementById('0101')
let strengthBadge = document.getElementById('0102')
let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')

password.addEventListener("input", () => {

    strengthBadge.style.display= 'block'
    clearTimeout(timeout);
    timeout = setTimeout(() => StrengthChecker(password.value), 500);

    if(password.value.length !== 0){
        strengthBadge.style.display != 'block'
    }else{
        strengthBadge.style.display = 'none'
    }
});


function StrengthChecker(PasswordParameter){

    if(strongPassword.test(PasswordParameter)){
        strengthBadge.style.backgroundColor = "green"
        strengthBadge.textContent = 'Strong'
    }else if(mediumPassword.test(PasswordParameter)){
        strengthBadge.style.backgroundColor = 'blue'
        strengthBadge.textContent = 'Medium'
    }else{
        strengthBadge.style.backgroundColor = 'red'
        strengthBadge.textContent = 'Weak'
    }

}
