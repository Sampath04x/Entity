/*=========================================================
ENTITY ENTERPRISES
Hero Controller
=========================================================*/

function initHero() {

    const tl = gsap.timeline({

        defaults: {

            ease: "power4.out"

        }

    });

    /*======================================
    Initial State
    ======================================*/

    gsap.set(".hero-label", {

        opacity: 0,

        y: 30

    });

    gsap.set(".hero-title span", {

        yPercent: 110

    });

    gsap.set(".hero-description", {

        opacity: 0,

        y: 40

    });

    gsap.set(".hero-buttons", {

        opacity: 0,

        y: 40

    });

    gsap.set(".hero-building", {

        opacity: 0,

        scale: .92

    });

    gsap.set(".hero-blueprint", {

        opacity: 0

    });

    gsap.set(".hero-grid", {

        opacity: 0

    });

    gsap.set(".scroll-indicator", {

        opacity: 0,

        y: 20

    });

    /*======================================
    Intro Timeline
    ======================================*/

    tl

    .to(".hero-blueprint", {

        opacity: 1,

        duration: 1

    })

    .to(".hero-grid", {

        opacity: 1,

        duration: 1

    }, "-=.8")

    .to(".hero-building", {

        opacity: 1,

        scale: 1,

        duration: 1.5

    }, "-=.8")

    .to(".hero-label", {

        opacity: 1,

        y: 0,

        duration: .8

    }, "-=1")

    .to(".hero-title span", {

        yPercent: 0,

        stagger: .12,

        duration: 1

    }, "-=.7")

    .to(".hero-description", {

        opacity: 1,

        y: 0,

        duration: .8

    }, "-=.6")

    .to(".hero-buttons", {

        opacity: 1,

        y: 0,

        duration: .8

    }, "-=.5")

    .to(".scroll-indicator", {

        opacity: 1,

        y: 0,

        duration: .6

    }, "-=.2");



    /*======================================
    Mouse Parallax
    ======================================*/

    const hero = document.querySelector(".hero");

    if(hero){

        hero.addEventListener("mousemove",(e)=>{

            const x=(e.clientX/window.innerWidth-.5);

            const y=(e.clientY/window.innerHeight-.5);

            gsap.to(".hero-building",{

                x:x*40,

                y:y*20,

                rotateY:x*6,

                rotateX:-y*3,

                duration:1.8,

                ease:"power3.out"

            });

            gsap.to(".hero-blueprint",{

                x:x*12,

                y:y*12,

                duration:2

            });

            gsap.to(".hero-light",{

                x:x*80,

                y:y*40,

                duration:3

            });

        });

    }


    /*======================================
    Floating Building
    ======================================*/

    gsap.to(".hero-building",{

        y:-15,

        repeat:-1,

        yoyo:true,

        duration:4,

        ease:"sine.inOut"

    });


    /*======================================
    Ambient Light
    ======================================*/

    gsap.to(".hero-light",{

        scale:1.05,

        repeat:-1,

        yoyo:true,

        duration:8,

        ease:"sine.inOut"

    });


    /*======================================
    Scroll Animation
    ======================================*/

    window.addEventListener("scroll",()=>{

        const progress=Math.min(

            window.scrollY/window.innerHeight,

            1

        );

        gsap.to(".hero-content",{

            y:-progress*120,

            opacity:1-progress,

            duration:.25

        });

        gsap.to(".hero-building",{

            y:-progress*60,

            scale:1-progress*.08,

            duration:.25

        });

        gsap.to(".hero-blueprint",{

            opacity:.6-progress*.6,

            duration:.25

        });

    });


    /*======================================
    Scroll Indicator
    ======================================*/

    gsap.to(".scroll-line::before",{

        y:120,

        repeat:-1,

        duration:2,

        ease:"none"

    });

}