// /* hover glow */

// const projectSection = document.getElementById('projects-section');

// projectSection.addEventListener('mousemove', e => {

//    const rect = projectSection.getBoundingClientRect();

//    const x = ((e.clientX - rect.left) / rect.width) * 100;
//    const y = ((e.clientY - rect.top) / rect.height) * 100;

//    document.querySelectorAll('.project-content').forEach(content => {

//       content.style.setProperty('--x', `${x}%`);
//       content.style.setProperty('--y', `${y}%`);
//       content.classList.add('hovered');

//    });

// });

// projectSection.addEventListener('mouseleave', () => {

//    document.querySelectorAll('.project-content').forEach(content => {
//       content.classList.remove('hovered');
//    });

// });


// /* FILTER */

// const filterButtons = document.querySelectorAll(".filter-btn");
// const projectCards = document.querySelectorAll(".project-card");

// filterButtons.forEach(btn => {

//    btn.addEventListener("click", () => {

//       document.querySelector(".filter-btn.active1").classList.remove("active");
//       btn.classList.add("active");

//       const filter = btn.dataset.filter;

//       projectCards.forEach(card => {

//          if (filter === "all1" || card.dataset.category === filter) {

//             card.style.display = "flex";
//             card.classList.remove("hide");

//          } else {

//             card.classList.add("hide");

//             setTimeout(() => card.style.display = "none", 300);

//          }

//       });

//    });

// });


// /* MODAL */

// const modal = document.getElementById("projectModal");
// const modalContent = document.querySelector(".modal-content");

// const modalMain = document.getElementById("modalMainImage");
// const modalThumbs = document.getElementById("modalThumbs");

// const modalTitle = document.getElementById("modalTitle");
// const modalDesc = document.getElementById("modalDesc");

// document.querySelectorAll(".project-card").forEach(card => {

//    card.addEventListener("click", () => {

//       const images = card.dataset.images.split(",");

//       modalThumbs.innerHTML = "";

//       modalMain.src = images[0];

//       images.forEach((img, i) => {

//          const thumb = document.createElement("img");
//          thumb.src = img;

//          if (i === 0) thumb.classList.add("active");

//          thumb.onclick = () => {

//             modalMain.src = img;

//             document.querySelectorAll(".modal-thumbnails img").forEach(t => t.classList.remove("active"));
//             thumb.classList.add("active");

//          };

//          modalThumbs.appendChild(thumb);

//       });

//       modalTitle.textContent = card.querySelector(".project-title").textContent;
//       modalDesc.textContent = card.querySelector(".project-description").textContent;

//       modal.classList.add("active");

//    });

// });

// /* modal close */

// document.querySelector(".modal-close").onclick = () => {
//    modal.classList.remove("active");
// };

// modal.addEventListener("click", (e) => {

//    if (!modalContent.contains(e.target)) {
//       modal.classList.remove("active");
//    }

// });





/* ============================= */
/* PROJECT FILTER */
/* ============================= */

const filterButtons=document.querySelectorAll(".filter-btn")
const projectCards=document.querySelectorAll(".project-card")

filterButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

document.querySelector(".filter-btn.active").classList.remove("active")
btn.classList.add("active")

const filter=btn.dataset.filter

projectCards.forEach(card=>{

if(filter==="all1" || card.dataset.category===filter){

card.style.display="flex"
setTimeout(()=>card.classList.remove("hide"),10)

}
else{

card.classList.add("hide")
setTimeout(()=>card.style.display="none",300)

}

})

})

})


/* ============================= */
/* PROJECT MODAL */
/* ============================= */

const projectModal=document.getElementById("projectModal")
const modalContent=document.querySelector(".modal-content")

const modalMain=document.getElementById("modalMainImage")
const modalThumbs=document.getElementById("modalThumbs")

const modalTitle=document.getElementById("modalTitle")
const modalDesc=document.getElementById("modalDesc")

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("click",()=>{

const images=card.dataset.images.split(",")

modalThumbs.innerHTML=""

modalMain.src=images[0]

images.forEach((img,i)=>{

const thumb=document.createElement("img")
thumb.src=img

if(i===0) thumb.classList.add("active")

thumb.onclick=()=>{

modalMain.src=img

document.querySelectorAll(".modal-thumbnails img").forEach(t=>t.classList.remove("active"))
thumb.classList.add("active")

}

modalThumbs.appendChild(thumb)

})

modalTitle.textContent=card.querySelector(".project-title").textContent
modalDesc.textContent=card.querySelector(".project-description").textContent

projectModal.classList.add("active")

})

})

document.querySelector(".modal-close").onclick=()=>{

projectModal.classList.remove("active")

}

projectModal.addEventListener("click",e=>{

if(!modalContent.contains(e.target)){
projectModal.classList.remove("active")
}

})

