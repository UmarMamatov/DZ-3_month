const gmailInput = document.getElementById('gmail_input');
const gmailButton = document.getElementById('gmail_button');
const gmailResult = document.getElementById('gmail_result');

const regExp = /^[a-z][a-z0-9]{5,29}@gmail.com$/

gmailButton.onclick = ()=>{
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    }else {
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
}
//////////


let childBlock = document.querySelector('.child_block');

let time = new Date().getTime();
let position= 0;
const move = ()=>{
    let time2 = new Date().getTime();
    position= Math.round(((time2 - time)/1000) * 100);
    if (position < 450){
         window.requestAnimationFrame(move);
    childBlock.style.left= position + 'px';
    }
}
move();

