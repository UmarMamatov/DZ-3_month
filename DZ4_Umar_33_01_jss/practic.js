const request = new XMLHttpRequest();
request.open("GET","practic.json");
request.setRequestHeader("Content-type","application/json")
request.send();

request.addEventListener("load",()=>{
    const data = JSON.parse(request.response)
    data.forEach((company)=>{
        console.log(company)
    })
})
