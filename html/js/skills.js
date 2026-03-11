// const canvas = document.getElementById("network")
// const ctx = canvas.getContext("2d")

// const modal = document.getElementById("skillModal")

// const modalTitle = modal.querySelector(".skill-title")
// const modalBar = modal.querySelector(".skill-bar span")
// const modalPercent = modal.querySelector(".skill-percent")

// const BOUNDS = {
//    width: 0,
//    height: 0
// }

// function resizeCanvas() {

//    canvas.width = canvas.clientWidth
//    canvas.height = canvas.clientHeight

//    BOUNDS.width = canvas.width
//    BOUNDS.height = canvas.height

// }

// resizeCanvas()

// window.addEventListener("resize", resizeCanvas)

// let hoveredNode = null

// class Node {

//    constructor(x, y, radius, color, text, logoUrl, level) {

//       this.x = x
//       this.y = y
//       this.targetX = x
//       this.targetY = y

//       this.radius = radius
//       this.color = color
//       this.text = text
//       this.level = level

//       this.logo = new Image()
//       this.logo.src = logoUrl

//       this.dx = (Math.random() - .5) * 1
//       this.dy = (Math.random() - .5) * 1

//    }

//    draw() {

//       ctx.beginPath()
//       ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)

//       ctx.fillStyle = this.color
//       ctx.shadowColor = this.color
//       ctx.shadowBlur = 15
//       ctx.fill()
//       ctx.closePath()

//       ctx.shadowBlur = 0

//       if (this.logo.complete) {

//          ctx.drawImage(this.logo, this.x - 12, this.y - 12, 24, 24)

//       }

//       ctx.fillStyle = "#fff"
//       ctx.font = "14px Poppins"
//       ctx.textAlign = "left"
//       ctx.fillText(this.text, this.x + this.radius + 12, this.y + 4)

//    }

//    update() {

//       if (hoveredNode === this) return

//       this.targetX += this.dx
//       this.targetY += this.dy

//       if (this.targetX > BOUNDS.width - this.radius || this.targetX < this.radius) this.dx *= -1
//       if (this.targetY > BOUNDS.height - this.radius || this.targetY < this.radius) this.dy *= -1

//       this.x += (this.targetX - this.x) * .1
//       this.y += (this.targetY - this.y) * .1

//       this.draw()

//    }

// }

// const logoBase = "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/"

// const skills = [

//    {
//       color: "#ff6f00",
//       text: "HTML5",
//       logo: "html5.svg",
//       level: 95,
//       cat: "frontend-skills"
//    },
//    {
//       color: "#2965f1",
//       text: "CSS3",
//       logo: "css3.svg",
//       level: 92,
//       cat: "frontend-skills"
//    },
//    {
//       color: "#f7df1e",
//       text: "JavaScript",
//       logo: "javascript.svg",
//       level: 90,
//       cat: "frontend-skills"
//    },
//    {
//       color: "#61dafb",
//       text: "React",
//       logo: "react.svg",
//       level: 85,
//       cat: "frontend-skills"
//    },

//    {
//       color: "#777bb4",
//       text: "PHP",
//       logo: "php.svg",
//       level: 88,
//       cat: "backend-skills"
//    },
//    {
//       color: "#00758f",
//       text: "MySQL",
//       logo: "mysql.svg",
//       level: 86,
//       cat: "backend-skills"
//    },
//    {
//       color: "#f29111",
//       text: "Laravel",
//       logo: "laravel.svg",
//       level: 90,
//       cat: "backend-skills"
//    },

//    {
//       color: "#f05033",
//       text: "Git",
//       logo: "git.svg",
//       level: 92,
//       cat: "tools-skills"
//    },
//    {
//       color: "#ffffff",
//       text: "GitHub",
//       logo: "github.svg",
//       level: 94,
//       cat: "tools-skills"
//    },
//    {
//       color: "#a259ff",
//       text: "Figma",
//       logo: "figma.svg",
//       level: 75,
//       cat: "tools-skills"
//    }

// ]

// let nodes = []
// let activeFilter = "all-skills"

// function createNodes() {

//    nodes = []

//    const filtered = activeFilter === "all-skills" ?
//       skills :
//       skills.filter(s => s.cat === activeFilter)

//    const centerX = BOUNDS.width / 2
//    const centerY = BOUNDS.height / 2

//    const spread = Math.min(BOUNDS.width, BOUNDS.height) / 2.2

//    filtered.forEach((s, i) => {

//       const angle = (i / filtered.length) * Math.PI * 2

//       const x = centerX + Math.cos(angle) * spread
//       const y = centerY + Math.sin(angle) * spread

//       nodes.push(new Node(x, y, 28, s.color, s.text, logoBase + s.logo, s.level))

//    })

// }

// createNodes()

// /* FILTER BUTTONS */

// document.querySelectorAll(".skill-btn").forEach(btn => {

//    btn.addEventListener("click", () => {

//       document.querySelector(".skill-btn.active").classList.remove("active")

//       btn.classList.add("active")

//       activeFilter = btn.dataset.filter

//       createNodes()

//    })

// })

// /* HOVER */

// canvas.addEventListener("mousemove", e => {

//    const rect = canvas.getBoundingClientRect()

//    const mx = e.clientX - rect.left
//    const my = e.clientY - rect.top

//    hoveredNode = null

//    nodes.forEach(node => {

//       const dist = Math.hypot(mx - node.x, my - node.y)

//       if (dist < node.radius + 8) {

//          hoveredNode = node

//          modal.classList.add("show")

//          modal.style.left = node.x + "px"
//          modal.style.top = node.y + "px"

//          modalTitle.textContent = node.text

//          modalBar.style.width = node.level + "%"

//          modalPercent.textContent = node.level + "% proficiency"

//       }

//    })

//    if (!hoveredNode) {

//       modal.classList.remove("show")

//    }

// })

// /* CONNECTIONS */

// function connectNodes() {

//    for (let i = 0; i < nodes.length; i++) {

//       for (let j = i + 1; j < nodes.length; j++) {

//          const dx = nodes[i].x - nodes[j].x
//          const dy = nodes[i].y - nodes[j].y

//          const dist = Math.sqrt(dx * dx + dy * dy)

//          if (dist < 220) {

//             ctx.beginPath()

//             ctx.strokeStyle = "rgba(255,255,255,0.08)"
//             ctx.lineWidth = 1

//             ctx.moveTo(nodes[i].x, nodes[i].y)
//             ctx.lineTo(nodes[j].x, nodes[j].y)

//             ctx.stroke()

//          }

//       }

//    }

// }

// /* ANIMATION */

// function animate() {

//    ctx.clearRect(0, 0, BOUNDS.width, BOUNDS.height)

//    connectNodes()

//    nodes.forEach(node => node.update())

//    requestAnimationFrame(animate)

// }

// animate()














/* ============================= */
/* SKILLS CANVAS */
/* ============================= */

const canvas = document.getElementById("network")
const ctx = canvas.getContext("2d")

const skillModal = document.getElementById("skillModal")
const skillTitle = skillModal.querySelector(".skill-title")
const skillBar = skillModal.querySelector(".skill-bar span")
const skillPercent = skillModal.querySelector(".skill-percent")

const BOUNDS = { width:0, height:0 }

function resizeCanvas(){
canvas.width = canvas.clientWidth
canvas.height = canvas.clientHeight
BOUNDS.width = canvas.width
BOUNDS.height = canvas.height
createNodes()
}

window.addEventListener("resize",resizeCanvas)

let hoveredNode=null

class Node{

constructor(x,y,radius,color,text,logoUrl,level){
this.x=x
this.y=y
this.targetX=x
this.targetY=y

this.radius=radius
this.color=color
this.text=text
this.level=level

this.logo=new Image()
this.logo.src=logoUrl

this.dx=(Math.random()-.5)*1
this.dy=(Math.random()-.5)*1
}

draw(){

ctx.beginPath()
ctx.arc(this.x,this.y,this.radius,0,Math.PI*2)

ctx.fillStyle=this.color
ctx.shadowColor=this.color
ctx.shadowBlur=15
ctx.fill()

ctx.shadowBlur=0

if(this.logo.complete){
ctx.drawImage(this.logo,this.x-12,this.y-12,24,24)
}

ctx.fillStyle="#fff"
ctx.font="14px Poppins"
ctx.textAlign="left"
ctx.fillText(this.text,this.x+this.radius+12,this.y+4)

}

update(){

if(hoveredNode===this) return

this.targetX+=this.dx
this.targetY+=this.dy

if(this.targetX>BOUNDS.width-this.radius || this.targetX<this.radius) this.dx*=-1
if(this.targetY>BOUNDS.height-this.radius || this.targetY<this.radius) this.dy*=-1

this.x+=(this.targetX-this.x)*.1
this.y+=(this.targetY-this.y)*.1

this.draw()

}

}

const logoBase="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/"

const skills=[

{color:"#ff6f00",text:"HTML5",logo:"html5.svg",level:95,cat:"frontend-skills"},
{color:"#2965f1",text:"CSS3",logo:"css3.svg",level:92,cat:"frontend-skills"},
{color:"#f7df1e",text:"JavaScript",logo:"javascript.svg",level:90,cat:"frontend-skills"},
{color:"#61dafb",text:"React",logo:"react.svg",level:85,cat:"frontend-skills"},

{color:"#777bb4",text:"PHP",logo:"php.svg",level:88,cat:"backend-skills"},
{color:"#00758f",text:"MySQL",logo:"mysql.svg",level:86,cat:"backend-skills"},
{color:"#f29111",text:"Laravel",logo:"laravel.svg",level:90,cat:"backend-skills"},

{color:"#f05033",text:"Git",logo:"git.svg",level:92,cat:"tools-skills"},
{color:"#ffffff",text:"GitHub",logo:"github.svg",level:94,cat:"tools-skills"},
{color:"#a259ff",text:"Figma",logo:"figma.svg",level:75,cat:"tools-skills"}

]

let nodes=[]
let activeFilter="all-skills"

function createNodes(){

nodes=[]

const filtered=activeFilter==="all-skills"?skills:skills.filter(s=>s.cat===activeFilter)

const centerX=BOUNDS.width/2
const centerY=BOUNDS.height/2

const spread=Math.min(BOUNDS.width,BOUNDS.height)/2.2

filtered.forEach((s,i)=>{

const angle=(i/filtered.length)*Math.PI*2

const x=centerX+Math.cos(angle)*spread
const y=centerY+Math.sin(angle)*spread

nodes.push(new Node(x,y,28,s.color,s.text,logoBase+s.logo,s.level))

})

}

resizeCanvas()

document.querySelectorAll(".skill-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

document.querySelector(".skill-btn.active").classList.remove("active")
btn.classList.add("active")

activeFilter=btn.dataset.filter
createNodes()

})

})

canvas.addEventListener("mousemove",e=>{

const rect=canvas.getBoundingClientRect()

const mx=e.clientX-rect.left
const my=e.clientY-rect.top

hoveredNode=null

nodes.forEach(node=>{

const dist=Math.hypot(mx-node.x,my-node.y)

if(dist<node.radius+8){

hoveredNode=node

skillModal.classList.add("show")
skillModal.style.left=node.x+"px"
skillModal.style.top=node.y+"px"

skillTitle.textContent=node.text
skillBar.style.width=node.level+"%"
skillPercent.textContent=node.level+"% proficiency"

}

})

if(!hoveredNode){
skillModal.classList.remove("show")
}

})

function connectNodes(){

for(let i=0;i<nodes.length;i++){

for(let j=i+1;j<nodes.length;j++){

const dx=nodes[i].x-nodes[j].x
const dy=nodes[i].y-nodes[j].y

const dist=Math.sqrt(dx*dx+dy*dy)

if(dist<220){

ctx.beginPath()
ctx.strokeStyle="rgba(255,255,255,0.08)"
ctx.lineWidth=1

ctx.moveTo(nodes[i].x,nodes[i].y)
ctx.lineTo(nodes[j].x,nodes[j].y)

ctx.stroke()

}

}

}

}

function animate(){

ctx.clearRect(0,0,BOUNDS.width,BOUNDS.height)

connectNodes()

nodes.forEach(node=>node.update())

requestAnimationFrame(animate)

}

animate()
