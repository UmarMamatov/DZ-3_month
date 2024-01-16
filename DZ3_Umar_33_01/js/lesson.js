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
    tabContents.forEach(tabContent => tabContent.style.display = 'none');
    tabItems.forEach(tabItem => tabItem.classList.remove('tab_content_item_active'));
};

const showTabContent = (index = 0) => {
    tabContents[index].style.display = 'block';
    tabItems[index].classList.add('tab_content_item_active');
};

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

hideTabContent();
showTabContent();
startAutoSlider();
