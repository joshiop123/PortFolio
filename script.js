var cursor = new MouseFollower();


function anim(value) {
    gsap.from(value, {
        y: 100,
        opacity: 0,
        delay: 0.1,
        duration: 0.9,
        stagger: 0.3
    })
}

anim('.second h1');
anim('.second h2');

Shery.makeMagnet(".magnet ,.btn ,.about button ,.wrote button" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

Shery.hoverWithMediaCircle(".it ,.me , .kj" /* Element to target.*/, {
    videos: ["1.mp4", "2.mp4", "3.mp4"],
});




// gsap.registerPlugin(ScrollTrigger);

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".bod"),
//   smooth: true,

//   // for tablet smooth
//   tablet: { smooth: true },

//   // for mobile
//   smartphone: { smooth: true }
// });
// locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy(".bod", {
//   scrollTop(value) {
//     return arguments.length
//       ? locoScroll.scrollTo(value, 0, 0)
//       : locoScroll.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight
//     };
//   }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
// });

// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// ScrollTrigger.refresh();


// gsap.to(".pro h2",{
//     x:-10,
//     scrollTrigger:{
//         trigger:".pro h2",
//         scroller:".fourth",
//         markers:true,
//         start:"top 90%",
//         end:"top 10%",
//         scrub:2
//     }

// })




















// gsap.to(".heading h2",{
//     x:-80,

//     scrollTrigger:{
//         trigger:".heading h2",
//         scroller:".second",
//         markers:true,
//         start:"top 30%",
//         end:"top 0%",
//         scrub:2

//     }

// })


