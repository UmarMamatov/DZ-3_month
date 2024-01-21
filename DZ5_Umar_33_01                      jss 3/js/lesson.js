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


//Tab slider
const tabContents = document.querySelectorAll(".tab_content_block");
const tabItems = document.querySelectorAll(".tab_content_item");
const tabParent = document.querySelector('.tab_content_items');
let index = 0;
let autoSlideInterval;

const hideTabContent = () => {
    tabContents.forEach((tabContent) =>{
        tabContent.style.display = 'none'
    });
    tabItems.forEach((tabItem) => {
        tabItem.classList.remove('tab_content_item_active')
    });
};

const showTabContent = (index = 0) => {
    tabContents[index].style.display = 'block';
    tabItems[index].classList.add('tab_content_item_active');
};

tabParent.addEventListener("click", (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabItems.forEach((tabItem, tabIndex) => {
            if (event.target === tabItem) {
                hideTabContent();
                showTabContent(tabIndex);
                index = tabIndex;
                stopAutoSlider();
                startAutoSlider();
            }
        });
    }
});

const startAutoSlider = () => {
    autoSlideInterval = setInterval(() => {
        index++;
        if (index > tabContents.length - 1) {
            index = 0;
        }
        hideTabContent();
        showTabContent(index);
    }, 2000);
};

const stopAutoSlider = () => {
    clearInterval(autoSlideInterval);
};



hideTabContent();
showTabContent();
startAutoSlider();



////converter
const somInput = document.querySelector("#som")
const usdInput = document.querySelector("#usd")
const euroInput = document.querySelector("#euro")

const converter = (element, targetElement,targetElement2, currentValue)=>{
    element.oninput = ()=>{
        const request = new XMLHttpRequest();
        request.open("GET","../data/converter.json")
        request.setRequestHeader("Content-type","application/json")
        request.send();

        request.onload = ()=>{
            const data= JSON.parse(request.response)
            switch (currentValue){
                case 'som':
                    targetElement.value = (element.value/data.usd).toFixed(2)
                    targetElement2.value = (element.value/data.euro).toFixed(2)
                    break;
                case 'usd':
                    targetElement.value = (element.value * data.usd).toFixed(2)
                    targetElement2.value = (element.value * data.euro2).toFixed(2)
                    break;
                case 'euro':
                    targetElement.value = (element.value * data.euro).toFixed(2)
                    targetElement2.value = (element.value * data.usd2).toFixed(2)
                    break;
                default:
                    break;
            }
            element.value==="" && (targetElement.value="") (targetElement2.value="")
        }
    }
}

converter(somInput, usdInput,euroInput,'som')
converter(usdInput, somInput,euroInput,'usd')
converter(euroInput, somInput,usdInput,'euro')
