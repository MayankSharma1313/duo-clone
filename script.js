function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

};

init();

var cursor = document.querySelector(".cursor");

var main = document.querySelector(".main");
document.addEventListener("mousemove",function(dets){
      cursor.style.left =dets.x + 2+"px";
      cursor.style.top =dets.y + 2+"px";
})

var tl = gsap.timeline({
  scrollTrigger:{
    trigger:".page1 h1",
    scroller: ".main",
    start: "top 27%",
    end: "top 0", 
    scrub: 3,
    // markers: true
}
})
tl.to(".page1 h1",{
    x:-80
}, "anim")

tl.to(".page1 h2",{
  x: 80
},"anim")

tl.to(".page1 video",{
  width: "90%"
},"anim")

var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:".page1 h1",
    scroller: ".main",
    start: "top -200%",
    end: "top -155%", 
    scrub: 3,
    // markers: true
}
})    

tl2.to(".main",{
  backgroundColor: "#fff"
})

var tl3 = gsap.timeline({
  scrollTrigger:{
    trigger:".page1 h1",
    scroller: ".main",
    start: "top -390%",
    end: "top -400%", 
    scrub: 3,
    // markers: true
}
})

tl3.to(".main",{
  backgroundColor: "#0f0d0d"
})


var boxes = document.querySelectorAll(".box");  
boxes.forEach(function(ms){
  ms.addEventListener("mouseenter",function(){
    // ms.style.backgroundColor = "red";  
     var att =  ms.getAttribute("data-image");
     cursor.style.width  = "300px";
     cursor.style.height  = "250px";
     cursor.style.borderRadius = "0";
     cursor.style.backgroundImage = `url(${att})`;
  })
  ms.addEventListener("mouseleave",function(){
    ms.style.backgroundColor = "transparent";
    cursor.style.width  = "15px";
     cursor.style.height  = "15px";
     cursor.style.borderRadius = "50%";
     cursor.style.backgroundImage = `none`;
  })
})

var h4 = document.querySelectorAll(".nav h4");
var purple = document.querySelector(".purple");
h4.forEach(function(ms){
  ms.addEventListener("mouseenter",function(){
    purple.style.display = "block";
    purple.style.opacity = "1";
  });

  ms.addEventListener("mouseleave",function(){
    purple.style.display = "none";
    purple.style.opacity = "0 ";
  });
  
})