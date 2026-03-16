/* ================= SPLIT INTERACTION ================= */

const section=document.getElementById("split")
const left=document.getElementById("left-side")
const divider=document.getElementById("divider")

function updatePosition(clientX){

const rect=section.getBoundingClientRect()

const percent=((clientX-rect.left)/rect.width)*100

left.style.width=percent+"%"
divider.style.left=percent+"%"

}

/* mouse */

section.addEventListener("mousemove",(e)=>{
updatePosition(e.clientX)
})

/* touch */

section.addEventListener("touchmove",(e)=>{
updatePosition(e.touches[0].clientX)
},{passive:true})
