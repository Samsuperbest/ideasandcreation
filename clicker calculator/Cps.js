let click=0;
let finalmessage=document.getElementById("finalmessage");
let time=0;
document.getElementById("Start").addEventListener("click",function(){
    document.getElementById("clickhere").addEventListener("click",function(){
        click++
        timestop=document.getElementById("noofseseconds")
    })
const timeint =setInterval(() => {
    time++
    if (time>timestop){
        clearInterval(timeint)
        finalmessage.innerHTML = "Your speed is:"+" "+click/60+" "+"clicks per second";
    }
}, 1000)})


