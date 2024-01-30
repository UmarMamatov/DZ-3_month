const cards = document.querySelector('.cards')
let user = "https://img.freepik.com/premium-vector/avatar-profile-icon_188544-4755.jpg"
const fetchZ = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    const data = await response.json();
    data.forEach((info)=>{
        let {title, body}=info
        const infoCard = document.createElement("div");
        infoCard.setAttribute("class","infoCard")
        infoCard.innerHTML= `
            <img class="img_card" src="${user}" alt="${user}">
            <h5>${title}</h5>
            <p>${body}</p> 
            
        `
        cards.append(infoCard)
    })
}
fetchZ();
