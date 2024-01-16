const modal = document.querySelector(".modal")
const closeButton = document.querySelector('.modal_close')
const clickMe = document.querySelector('#btn-get')

const openModel = ()=>{
    modal.style.display = "block"
    document.body.style.overflow = 'hidden'
}
setTimeout(openModel,5000)

clickMe.onclick = ()=>{
   openModel();
};

const closeModal =()=>{
    modal.style.display ='none'
    document.body.style.overflow = ''
}

closeButton.onclick = ()=>{
    closeModal()
}

modal.onclick= (event)=>{
    if (event.target ===modal){
        closeModal()
    }
}


const isScrolledToBottom=()=>{
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}
const showModal = () => {
    if (isScrolledToBottom()) {
        openModel()
        window.removeEventListener('scroll', showModal);
    }
}

window.addEventListener("scroll" , showModal)

