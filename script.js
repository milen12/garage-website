gsap.registerPlugin(ScrollTrigger);


// ==========================================
// ELEMENTS
// ==========================================

const carImages = document.querySelectorAll(".car-image");
const carContainer = document.querySelector(".car-container");
const cursorGlow = document.querySelector(".cursor-glow");


// ==========================================
// CAR ENTRANCE
// ==========================================

gsap.fromTo(
    carContainer,
    {
        x: 300,
        opacity: 0
    },
    {
        x: 0,
        opacity: 1,
        duration: 1.6,
        delay: 0.4,
        ease: "power4.out"
    }
);


// ==========================================
// CAMERA ZOOM
// ==========================================

gsap.fromTo(
    carImages,
    {
        scale: 1.18
    },
    {
        scale: 1.08,
        duration: 2,
        delay: 0.4,
        ease: "power3.out"
    }
);


// ==========================================
// CURSOR GLOW
// ==========================================

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let glowX = mouseX;
let glowY = mouseY;

window.addEventListener("mousemove", (event) => {

    mouseX = event.clientX;
    mouseY = event.clientY;

});

if (cursorGlow) {

    gsap.ticker.add(() => {

        glowX += (mouseX - glowX) * 0.12;
        glowY += (mouseY - glowY) * 0.12;

        gsap.set(cursorGlow, {
            x: glowX,
            y: glowY
        });

    });

}


// ==========================================
// CAR MOUSE PARALLAX
// ==========================================

let carMouseX = 0;
let carMouseY = 0;

let smoothCarX = 0;
let smoothCarY = 0;

window.addEventListener("mousemove", (event) => {

    carMouseX =
        (event.clientX / window.innerWidth) - 0.5;

    carMouseY =
        (event.clientY / window.innerHeight) - 0.5;

});

gsap.ticker.add(() => {

    const targetX = carMouseX * -20;
    const targetY = carMouseY * -10;

    smoothCarX +=
        (targetX - smoothCarX) * 0.05;

    smoothCarY +=
        (targetY - smoothCarY) * 0.05;

    gsap.set(carContainer, {
        x: smoothCarX,
        y: smoothCarY
    });

});


// ==========================================
// SCROLL CAMERA
// ==========================================

gsap.to(carImages, {

    scale: 1.18,

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: 1

    }

});


// ==========================================
// HERO TEXT
// ==========================================

gsap.to(".hero-content", {

    y: -120,

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: true

    }

});


// ==========================================
// BACKGROUND
// ==========================================

gsap.to(".hero-bg", {

    yPercent: 25,

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: true

    }

});


// ==========================================
// RESIZE
// ==========================================

window.addEventListener("resize", () => {

    ScrollTrigger.refresh();

});




// ==========================================
// SERVICES SECTION ANIMATION
// ==========================================


// HEADER REVEAL

gsap.from(".services-header", {

    y: 80,

    opacity: 0,

    duration: 1,

    ease: "power3.out",

    scrollTrigger: {

        trigger: ".services",

        start: "top 75%",

        toggleActions:
            "play none none reverse"

    }

});


// SERVICE CARDS

gsap.from(".service-card", {

    y: 80,

    opacity: 0,

    duration: 0.8,

    stagger: 0.12,

    ease: "power3.out",

    scrollTrigger: {

        trigger: ".services-grid",

        start: "top 75%",

        toggleActions:
            "play none none reverse"

    }

});


// BOTTOM BUTTON

gsap.from(".services-bottom", {

    y: 40,

    opacity: 0,

    duration: 0.8,

    ease: "power3.out",

    scrollTrigger: {

        trigger: ".services-bottom",

        start: "top 85%",

        toggleActions:
            "play none none reverse"

    }

});


// ==========================================
// ROLLING TYRE PARALLAX
// ==========================================

const servicesWheel =
    document.querySelector(".services-wheel");

const servicesWheelImage =
    document.querySelector(".services-wheel img");


if (servicesWheel && servicesWheelImage) {


    // TYRE ROTATION

    gsap.to(servicesWheelImage, {

        rotation: 360,

        ease: "none",

        scrollTrigger: {

            trigger: ".services",

            start: "top bottom",

            end: "bottom top",

            scrub: 1

        }

    });


    // TYRE PARALLAX MOVEMENT

    gsap.to(servicesWheel, {

        x: -350,

        y: 250,

        ease: "none",

        scrollTrigger: {

            trigger: ".services",

            start: "top bottom",

            end: "bottom top",

            scrub: 1

        }

    });

}


// ==========================================
// ABOUT SECTION ANIMATION
// ==========================================

gsap.from(".about-image", {
    x: -180,
    opacity: 0,
    duration: 2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

gsap.from(".about-content", {
    x: 180,
    opacity: 0,
    duration: 2,
    delay: 0.25,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

gsap.to(".about-image img", {
    y: -50,
    scale: 1.14,
    ease: "none",
    scrollTrigger: {
        trigger: ".about",
        start: "top bottom",
        end: "bottom top",
        scrub: 2
    }
});

gsap.from(".about-stat", {
    y: 60,
    opacity: 0,
    duration: 1.4,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".about-stats",
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
});