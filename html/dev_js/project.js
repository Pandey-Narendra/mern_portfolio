document.addEventListener("DOMContentLoaded", () => {

/* ============================= */
/* PROJECT FILTER */
/* ============================= */

const filterButtons = document.querySelectorAll(".filter-btn")
const projectCards = document.querySelectorAll(".project-card")
const grid = document.querySelector(".projects-grid")

filterButtons.forEach(btn => {

btn.addEventListener("click", () => {

document.querySelector(".filter-btn.active").classList.remove("active")
btn.classList.add("active")

const filter = btn.dataset.filter
let visibleCount = 0

projectCards.forEach(card => {

if (filter === "all1" || card.dataset.category === filter) {

card.style.display = "flex"

requestAnimationFrame(() => {
card.classList.remove("hide")
})

visibleCount++

} else {

card.classList.add("hide")

setTimeout(() => {
card.style.display = "none"
}, 300)

}

})

setTimeout(() => {

if (visibleCount === 1) {
grid.classList.add("center-one")
} else {
grid.classList.remove("center-one")
}

}, 300)

})

})


/* ============================= */
/* PROJECT MODAL */
/* ============================= */

const projectModal = document.getElementById("projectModal")
const modalContent = document.querySelector(".modal-content")

const modalMainImg = document.getElementById("modalMainImage")
const modalThumbs = document.getElementById("modalThumbs")

const modalTitle = document.getElementById("modalTitle")
const modalDesc = document.getElementById("modalDesc")

document.querySelectorAll(".project-card").forEach(card => {

card.addEventListener("click", (e) => {

if (e.target.closest(".project-icon")) return

const images = card.dataset.images.split(",")

modalThumbs.innerHTML = ""
modalMainImg.src = images[0]

images.forEach((img, i) => {

const thumb = document.createElement("img")
thumb.src = img

if (i === 0) thumb.classList.add("active")

thumb.addEventListener("click", () => {

modalMainImg.src = img

document.querySelectorAll(".modal-thumbnails img")
.forEach(t => t.classList.remove("active"))

thumb.classList.add("active")

})

modalThumbs.appendChild(thumb)

})

modalTitle.textContent =
card.querySelector(".project-title").textContent

modalDesc.textContent =
card.querySelector(".project-description").textContent

projectModal.classList.add("active")
document.body.style.overflow = "hidden"

})

})


/* CLOSE MODAL */

document.querySelector(".modal-close").addEventListener("click", () => {

projectModal.classList.remove("active")
document.body.style.overflow = "auto"

})

projectModal.addEventListener("click", e => {

if (!modalContent.contains(e.target)) {

projectModal.classList.remove("active")
document.body.style.overflow = "auto"

}

})


/* ============================= */
/* CARD HOVER SPOTLIGHT */
/* ============================= */

document.querySelectorAll(".project-content").forEach(card => {

card.addEventListener("mousemove", e => {

const rect = card.getBoundingClientRect()

card.style.setProperty("--x", (e.clientX - rect.left) + "px")
card.style.setProperty("--y", (e.clientY - rect.top) + "px")

card.classList.add("hovered")

})

card.addEventListener("mouseleave", () => {
card.classList.remove("hovered")
})

})


/* ============================= */
/* SCROLL REVEAL */
/* ============================= */

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add("show-project")
observer.unobserve(entry.target)

}

})

}, {
threshold: 0.15,
rootMargin: "0px 0px -80px 0px"
})

projectCards.forEach(card => {

card.classList.add("project-hidden")
observer.observe(card)

})

})