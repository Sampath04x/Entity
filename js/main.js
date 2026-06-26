/*==========================================================
ENTITY ENTERPRISES
Main Controller
==========================================================*/

window.addEventListener("DOMContentLoaded", () => {

    if (typeof initNavbar === "function") {
        initNavbar();
    }

    if (typeof initHero === "function") {
        initHero();
    }
    initLoader();
    initCursor();
    initReveal();
    initCounters();
    initScrollProgress();
    initSmoothAnchors();
    initHorizontalProjects();
    initServices();
    initTimeline();

});


/*==========================================================
Cursor
==========================================================*/

function initCursor() {

    const cursor = document.getElementById("cursor");

    if (!cursor) return;

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    });

    document.querySelectorAll("a,button").forEach(item => {

        item.addEventListener("mouseenter", () => {

            cursor.classList.add("cursor-hover");

        });

        item.addEventListener("mouseleave", () => {

            cursor.classList.remove("cursor-hover");

        });

    });

}


/*==========================================================
Reveal
==========================================================*/

function initReveal() {

    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            entry.target.classList.add("active");

            observer.unobserve(entry.target);

        });

    }, {

        threshold: .15

    });

    elements.forEach(el => observer.observe(el));

}


/*==========================================================
Counters
==========================================================*/

function initCounters() {

    const counters = document.querySelectorAll(".counter");

    if (!counters.length) return;

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target = Number(counter.dataset.target);

            let value = 0;

            const increment = target / 80;

            const timer = setInterval(() => {

                value += increment;

                if (value >= target) {

                    value = target;
                    clearInterval(timer);

                }

                counter.textContent = Math.floor(value);

            }, 18);

            observer.unobserve(counter);

        });

    });

    counters.forEach(c => observer.observe(c));

}


/*==========================================================
Progress
==========================================================*/

function initScrollProgress() {

    let bar = document.querySelector(".scroll-progress");

    if (!bar) {

        bar = document.createElement("div");

        bar.className = "scroll-progress";

        document.body.appendChild(bar);

    }

    window.addEventListener("scroll", () => {

        const total = document.documentElement.scrollHeight - window.innerHeight;

        const progress = (window.scrollY / total) * 100;

        bar.style.width = progress + "%";

    });

}


/*==========================================================
Anchor
==========================================================*/

function initSmoothAnchors() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(

                this.getAttribute("href")

            );

            if (!target) return;

            window.scrollTo({

                top: target.offsetTop - 80,

                behavior: "smooth"

            });

        });

    });

}

/*==========================================================

Premium Loader

==========================================================*/

function initLoader(){

const loader=document.getElementById("loader");

const bar=document.querySelector(".loader-progress-bar");

const status=document.querySelector(".loader-status");

if(!loader) return;

const tl=gsap.timeline();

tl.to(bar,{

width:"30%",

duration:.8

})

.call(()=>{

status.textContent="Drawing Blueprint...";

})

.to(bar,{

width:"65%",

duration:.8

})

.call(()=>{

status.textContent="Constructing Structure...";

})

.to(bar,{

width:"100%",

duration:.8

})

.call(()=>{

status.textContent="Ready";

})

.to(loader,{

delay:.3,

yPercent:-100,

duration:1.2,

ease:"power4.inOut",

onComplete(){

loader.remove();

}

});

}
/*==========================================================
Page Loaded
==========================================================*/

window.addEventListener("load", () => {
    

    document.body.classList.add("loaded");

});


/*==========================================================
Console
==========================================================*/

console.log(

"%cENTITY ENTERPRISES",

"font-size:20px;font-weight:bold;color:#0D2346"

);

console.log(

"%cArchitecture Experience Loaded",

"color:#888"

);
function initHorizontalProjects(){

const slider=document.querySelector(".projects-slider");

if(!slider) return;

let isDown=false;

let startX;

let scrollLeft;

slider.addEventListener("mousedown",(e)=>{

isDown=true;

startX=e.pageX-slider.offsetLeft;

scrollLeft=slider.scrollLeft;

});

slider.addEventListener("mouseleave",()=>{

isDown=false;

});

slider.addEventListener("mouseup",()=>{

isDown=false;

});

slider.addEventListener("mousemove",(e)=>{

if(!isDown) return;

e.preventDefault();

const x=e.pageX-slider.offsetLeft;

const walk=(x-startX)*2;

slider.scrollLeft=scrollLeft-walk;

});

}
/*==========================================================

Services Animation

==========================================================*/

function initServices(){

const cards=document.querySelectorAll(".service-panel");

if(!cards.length) return;

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

cards.forEach(c=>c.classList.remove("active"));

entry.target.classList.add("active");

}

});

},{

threshold:.6

});

cards.forEach(card=>observer.observe(card));

}
/*==========================================================

Timeline

==========================================================*/

function initTimeline(){

const items=document.querySelectorAll(".timeline-item");

const progress=document.querySelector(".timeline-progress");

if(!items.length) return;

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

const index=[...items].indexOf(entry.target);

const percentage=((index+1)/items.length)*100;

progress.style.height=percentage+"%";

}

});

},{

threshold:.5

});

items.forEach(item=>observer.observe(item));

}

/*==========================================================

Back To Top

==========================================================*/

const topBtn=document.getElementById("backTop");

if(topBtn){

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}
/*==========================================================

Project Hover Preview

==========================================================*/

const preview=document.getElementById("image-preview");

const previewImage=document.getElementById("preview-image");

document.querySelectorAll(".project-card").forEach(card=>{

const img=card.querySelector("img");

card.addEventListener("mouseenter",()=>{

preview.classList.add("active");

previewImage.src=img.src;

});

card.addEventListener("mouseleave",()=>{

preview.classList.remove("active");

});

card.addEventListener("mousemove",(e)=>{

preview.style.left=e.clientX+40+"px";

preview.style.top=e.clientY+40+"px";

});

});