const modal = document.querySelector(".modal")
const closeButton = document.querySelector('.modal_close')
const clickMe = document.querySelector('#btn-get')

const openModel = ()=>{
    modal.style.display = "block"
    document.body.style.overflow = 'hidden'
}
// setTimeout(openModel,5000)

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



const formElement = document.querySelector("form");

let postData = (url,data)=>{
     return fetch(url,{
         method:"POST",
         headers: {'Content-type' : 'application/json'},
         body: data
     })
}

const bindPostData = (form)=>{
    try {
        form.onsubmit= async (event)=>{
            event.preventDefault()
            const formData = new FormData(form)
            let user = {};
            formData.forEach((item,index)=> user[index] = item)
            const json = JSON.stringify(user)
            if (window.location.pathname === '/project/index.html') {
                await postData('server.php', json)
            } else {
                await postData('../server.php', json)
            }
        }
    } catch (error){
        console.log(error)
    }
}


bindPostData(formElement)

//form.addEventListener("submit",(event)=>{
//          event.preventDefault()
//
//          const request = new XMLHttpRequest();
//          request.open("POST", "server.php")
//          request.setRequestHeader("Content-type", "application/json")
//
//          const formData = new FormData(form)
//          let user = {}
//          formData.forEach((item,index)=>{
//              user[index] = item
//          })
//          const data = JSON.stringify(user)
//          request.send(data)
//
//      })