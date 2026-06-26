/*==========================================================
Background Floating Particles
==========================================================*/

const particleCanvas = document.createElement("canvas");

particleCanvas.id="particle-canvas";

document.body.appendChild(particleCanvas);

const ctx = particleCanvas.getContext("2d");

let w,h;

function resize(){

w=particleCanvas.width=window.innerWidth;

h=particleCanvas.height=window.innerHeight;

}

resize();

window.addEventListener("resize",resize);

const particles=[];

for(let i=0;i<80;i++){

particles.push({

x:Math.random()*w,

y:Math.random()*h,

r:Math.random()*2+0.4,

vx:(Math.random()-.5)*0.15,

vy:(Math.random()-.5)*0.15

});

}

function draw(){

ctx.clearRect(0,0,w,h);

ctx.fillStyle="rgba(13,35,70,.08)";

particles.forEach(p=>{

p.x+=p.vx;

p.y+=p.vy;

if(p.x<0)p.x=w;

if(p.x>w)p.x=0;

if(p.y<0)p.y=h;

if(p.y>h)p.y=0;

ctx.beginPath();

ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

ctx.fill();

});

requestAnimationFrame(draw);

}

draw();