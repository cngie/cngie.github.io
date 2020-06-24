gsap.registerPlugin(ScrollTrigger);

gsap.to("#mms", {
    scrollTrigger:{
        trigger: "#milk",
        start: "top center",
        end:"bottom 5%",
        scrub:2,
        toggleActions: "restart pause reverse pause",
    },
    duration: 2,
    y: "50vh",
});

gsap.from(".cards",{
    scrollTrigger:{
        trigger:"#game",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 3,
    },
    y: -300,

});
