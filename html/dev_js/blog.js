/* ================= BLOG IMAGE FOLLOW ================= */

const blogNav = document.getElementById("blogNav")
const links = blogNav.querySelectorAll("a")

let mouseX = 0
let mouseY = 0

let currentX = 0
let currentY = 0

let activeImg = null

links.forEach(link=>{

const img = link.querySelector("img")

link.addEventListener("mouseenter",()=>{
activeImg = img
})

link.addEventListener("mouseleave",()=>{
activeImg = null
})

link.addEventListener("mousemove",e=>{

const rect = link.getBoundingClientRect()

mouseX = e.clientX - rect.left
mouseY = e.clientY - rect.top

})

})

function animate(){

currentX += (mouseX - currentX) * 0.12
currentY += (mouseY - currentY) * 0.12

if(activeImg){

activeImg.style.left = currentX + "px"
activeImg.style.top = currentY + "px"

}

requestAnimationFrame(animate)

}

animate()