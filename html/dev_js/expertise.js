/* ===============================
GSAP SCROLL REVEAL
=============================== */

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".expertise-item").forEach(text=>{

gsap.to(text,{
backgroundSize:"100%",
ease:"none",

scrollTrigger:{
trigger:text,
start:"top 85%",
end:"top 35%",
scrub:true
}

});

});

/* ===============================
MAGNETIC CURSOR
=============================== */

document.querySelectorAll(".expertise-item").forEach(el=>{

el.addEventListener("mousemove",(e)=>{

const rect=el.getBoundingClientRect();

const x=e.clientX-rect.left-rect.width/2;
const y=e.clientY-rect.top-rect.height/2;

el.style.transform=`translate(${x*0.04}px,${y*0.04}px)`;

});

el.addEventListener("mouseleave",()=>{

el.style.transform="translateX(0)";

});

});
