/*스크롤 시 header color 변경*/
function scrollHeaderChange() {
    const page1 = $(".page1").offset().top - 1;
    const page2 = $(".page2").offset().top - 1;
    const page3 = $(".page3").offset().top - 1;
    const page4 = $(".page4").offset().top - 1;
    const page5 = $(".page5").offset().top - 1;
    const page6 = $(".page6").offset().top - 1;
    const page7 = $(".page7").offset().top - 1;
    const page8 = $(".page8").offset().top - 1;
    const page9 = $(".page9").offset().top - 1;

    if (page9 <= $(window).scrollTop()) {
        $("header").addClass("white");
    } else if (page8 <= $(window).scrollTop()) {
        $("header").addClass("white");
    } else if (page7 <= $(window).scrollTop()) {
        $("header").removeClass("white");
    } else if (page6 <= $(window).scrollTop()) {
        $("header").removeClass("white");
    } else if (page5 <= $(window).scrollTop()) {
        $("header").removeClass("white");
    } else if (page4 <= $(window).scrollTop()) {
        $("header").addClass("white");
    } else if (page3 <= $(window).scrollTop()) {
        $("header").removeClass("white");
    } else if (page2 <= $(window).scrollTop()) {
        $("header").addClass("white");
    } else if (page1 <= $(window).scrollTop()) {
        $("header").addClass("white");
    } else {
        $("header").removeClass("white");
    }
}

scrollHeaderChange();
$(window).on("scroll", function(){
    scrollHeaderChange();
});

/*성장과정 슬라이드*/
var swiper = new Swiper(".process-Swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});

/*gsap - scroll effect*/
//cover
const cover = document.querySelector("#cover");

ScrollTrigger.create({
    trigger: cover,
    start: "top top",
    pin: true,
    pinSpacing: false,
    toggleClass: "active",
});

//page1
const page1Ani = gsap.timeline();
page1Ani
.from("#page1 h1", {
    autoAlpha: 0,
    duration: 2,
    y: 50,
}, "text")
.to("#page1 .img-area",{
    duration: 5,
    yPercent: -110,
    ease: "slow(0.7, 0.7, false)"
});

ScrollTrigger.create({
    animation: page1Ani,
    trigger: "#page1",
    start: "top top",
    end: "+=3000",
    scrub: true,
    pin: true,
    markers: false,
    anticipatePin: 1,
})

//page2
const page2Ani = gsap.timeline();
page2Ani
.from("#page2 .page-text", {
    scale: 10,
    autoAlpha: 0,
    duration: 3
})
.from("#page2 .img-area img", {
    autoAlpha: 0,
    y: -30,
    ease: "back.out(4)",    
    scale: 0.5,
    stagger: {
        amount: 3,
        from: "random"
    }  
},"-=2")

ScrollTrigger.create({
    animation: page2Ani,
    trigger: "#page2",
    start: "top top",
    end: "+=3000",
    scrub: true,
    pin: true,
    anticipatePin: 1,
})

//page3
const page3Ani = gsap.timeline();
page3Ani
.from("#page3 .img-area .left-hand", {
    autoAlpha: 0,
    xPercent: -200,              
})
.from("#page3 .img-area .right-hand", {
    autoAlpha: 0,
    xPercent: 200,              
})
.from("#page3 .img-area .heart", {
    autoAlpha: 0,
    scale: 0,            
})
.from("#page3 .page-text", {
    scale: 0,
    autoAlpha: 0,
    duration: 2
})
.to("#page3 .img-area .heart", {
    autoAlpha: 0,
    scale: 6,  
    duration: 2
},"-=1")

ScrollTrigger.create({
    animation: page3Ani,
    trigger: "#page3",
    start: "top top",
    end: "+=3000",
    scrub: true,
    pin: true,
    markers: false,
    anticipatePin: 1,
})

//page6
const page6Ani = gsap.timeline();
page6Ani
.from("#page6 .text-area .box", {
    autoAlpha: 0,
    ease: "back.out(4)",    
    scale: 0,
    stagger: {
        amount: 3,
        from: "start"
    }  
})
ScrollTrigger.create({
    animation: page6Ani,
    trigger: "#page6",
    start: "top top",
    end: "+=3000px",
    scrub: true,
    pin: true,
    anticipatePin: 1,
});

//aos
AOS.init({
    duration: 500,
});

//popup
$(".pop-up .clo-btn").on("click", function(){
    $(this).parents(".pop-up").removeClass("active");
    $("html, body").css("overflow-y" , "initial");
});
$(".pop-up").on("click", function(e){
    if($(e.target).parents(".box").length < 1 && !$(e.target).hasClass(".box")) {
        console.log("팝업이야!");
        $(".pop-up").removeClass("active");
        $("html, body").css("overflow-y" , "initial");
    }
});
function curriculum1() {
    $(".curriculum1").addClass("active");
    $("html, body").css("overflow-y" , "hidden");
} 
function curriculum2() {
    $(".curriculum2").addClass("active");
    $("html, body").css("overflow-y" , "hidden");
} 
function curriculum3() {
    $(".curriculum3").addClass("active");
    $("html, body").css("overflow-y" , "hidden");
} 
function curriculum4() {
    $(".curriculum4").addClass("active");
    $("html, body").css("overflow-y" , "hidden");
} 