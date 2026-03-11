/* ================= SMOOTH IMAGE FOLLOW ================= */

const blogNav = document.getElementById("blogNav");

blogNav.querySelectorAll("a").forEach(link => {

const img = link.querySelector("img");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

link.addEventListener("mousemove", e => {

const rect = link.getBoundingClientRect();

mouseX = e.clientX - rect.left;
mouseY = e.clientY - rect.top;

});

function animate(){

currentX += (mouseX - currentX) * 0.15;
currentY += (mouseY - currentY) * 0.15;

img.style.left = currentX + "px";
img.style.top = currentY + "px";

requestAnimationFrame(animate);

}

animate();

});