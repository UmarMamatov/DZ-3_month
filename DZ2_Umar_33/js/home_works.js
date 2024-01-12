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

let positionX= 0;
let positionY= 0;
const maxW =449;
const move = ()=>{
    if (positionX <= maxW && positionY===0){
        positionX+=2;
        childBlock.style.left =`${positionX}px`;
        requestAnimationFrame(move)
    }else if (positionX>=maxW && positionY<=maxW){
        positionY+=2;
        childBlock.style.top = `${positionY}px`
        requestAnimationFrame(move)
    }else if (positionX>=0) {
        positionX-=2
        childBlock.style.left = `${positionX}px`
        requestAnimationFrame(move)
    }else if (positionY>=0) {
        positionY-=2
        childBlock.style.top = `${positionY}px`
        requestAnimationFrame(move)
    }
}
move();

////2
let seconds = document.querySelector('#seconds');

let startCount;
let startTimer = () => {
    startCount = setInterval(()=>{
        let sum = Number(seconds.innerHTML);
        sum++;
        seconds.innerHTML = sum;
    },1000)
}

let stopTimer = () =>{
    clearInterval(startCount)
}


let resetTimer = () =>{
    clearInterval(startCount)
    let sum = Number(seconds.innerHTML);
    seconds.innerHTML = 0;
}

