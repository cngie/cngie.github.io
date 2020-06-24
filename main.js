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

gsap.to("#mms2", {
    scrollTrigger:{
        trigger: "#buy",
        start: "top center",
        end:"bottom 5%",
        scrub:2,
        toggleActions: "restart pause reverse pause",
    },
    duration: 2,
    y: "70vh",
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

var openMenuButton = document.getElementById('menu');
var navSmall = document.getElementById('nav-small');
var closeMenuButton = document.getElementById('close')
openMenuButton.onclick = function(){
    navSmall.classList.add("open");
};
closeMenuButton.onclick = function(){
    navSmall.classList.remove("open");
}
/*var buyButton = document.getElementById('buynow');
var cart = document.getElementById('cart')&/

/*gsap.from("#cart",{
    scrollTrigger:{
        trigger:"#cart",
    },
    duration: 0.2,
    y: 200,
});


buyButton.onclick = function(){
    cart.classList.add("move");
};*/

