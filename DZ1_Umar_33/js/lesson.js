//Phone Checker
const phoneInput = document.getElementById('phone_input')
const phoneButton = document.getElementById('phone_button')
const phoneResult = document.getElementById('phone_result')

const regExp = /^\+996 [5729]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.addEventListener('click', ()=>{
    if (regExp.test(phoneInput.value)){
        phoneResult.innerHTML= 'OK'
        phoneResult.style.color = "green"
    }else {
        phoneResult.style.color = 'red'
        phoneResult.innerHTML = 'NOT OK'
    }
})