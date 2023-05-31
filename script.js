const label1 = document.getElementById("mylabel1").textContent
const userinput = document.querySelectorAll("input").textContent
const mylabel2 = document.getElementById("mylabel2").textContent
const phone = document.getElementById("phone").textContent
const mylabe13 = document.getElementById("mylabel3").textContent
const mylabel4= document.getElementById("mylabel4").textContent
const address= document.getElementById("address").textContent
const images = document.getElementById("demo").textContent

const url = "https://randomuser.me/api/"


const profilecard = ()=> {
    fetch(url).then((response) => {
        return response.json()

    }).then((datas) => {
        // document.body.innerHTML = datas
 console.log(datas);



 })
    
    
}
profilecard()

document.getElementById("userinput").addEventListener("click", profilecard)