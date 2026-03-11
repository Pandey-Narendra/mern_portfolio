/* ================= SPLIT INTERACTION ================= */

const section = document.getElementById("split")
const left = document.getElementById("left-side")
const divider = document.getElementById("divider")

function move(e){

const rect = section.getBoundingClientRect()

const x = e.clientX || e.touches[0].clientX

const percent = ((x - rect.left) / rect.width) * 100

left.style.width = percent + "%"

divider.style.left = percent + "%"

}

section.addEventListener("mousemove",move)
section.addEventListener("touchmove",e=>move(e.touches[0]))




