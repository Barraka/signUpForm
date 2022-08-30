let firstname=document.querySelector('#firstname');
let lastname=document.querySelector('#lastname');
let email=document.querySelector('#email');
let phone=document.querySelector('#phone');
let password=document.querySelector('#password');
let confirmp=document.querySelector('#confirm');
let allinputs=document.querySelectorAll('input');

allinputs.forEach(x=> {
    x.addEventListener('blur', onFocusOut);
});
allinputs.forEach(x=> {
    x.addEventListener('input', checkinput);
});


function onFocusOut(e) {
    if(!e.target.checkValidity()) {
        if(!e.target.classList.contains('isinvalid')) {
            e.target.classList.toggle('isinvalid');
            if(e.target.value==="")
                {
                e.target.setCustomValidity('Field must not be empty');
                e.target.nextElementSibling.textContent="Field must not be empty";
                }
            if(e.target.validity.patternMismatch) {
                e.target.setCustomValidity('Only a-z characters are allowed');
                e.target.nextElementSibling.textContent="Only a-z characters";
            }

            
        }

    }
    else if(e.target.classList.contains('isinvalid')) {
        e.target.classList.toggle('isinvalid');
        e.target.nextElementSibling.textContent="";
        e.target.setCustomValidity('');
    }
    if(e.target.id==='confirm') {
        if(password.value!==confirmp.value) {
            confirmp.setCustomValidity('Passwords do not match');
            confirmp.nextElementSibling.textContent='Passwords do not match';
            if(!confirmp.classList.contains('isinvalid'))confirmp.classList.toggle('isinvalid');
        }
    }
    
}

function checkinput(e) {
    if(e.target.classList.contains('isinvalid')) {
        e.target.setCustomValidity('');
        if(e.target.checkValidity()) {
            e.target.classList.toggle('isinvalid');            
            e.target.nextElementSibling.textContent="";
        }
    }
}

    