gsap.registerPlugin(ScrollTrigger);

gsap.to("#mms", {
    scrollTrigger:{
        trigger: "#milk-text",
        toggleActions: "restart pause resume pause",
    },
    duration:2, 
    y: 400,
    ease: "bounce"
});

gsap.from(".cards",{
    scrollTrigger:{
        trigger:".text-bottom",
        toggleActions: "restart pause resume pause",
    },
    duration: 1.5,
    y: -250,
    stagger: 0.3,
});