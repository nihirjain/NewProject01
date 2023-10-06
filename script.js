const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function videocon(){
    let videocontainer = document.getElementById("video-container");
let playbtn = document.getElementById("play");

videocontainer.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    });
})

videocontainer.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    });
})

videocontainer.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x,
        top:dets.y
    })
})
}
videocon();
gsap.from("#page1 h1",{
    y:50,
    opacity:0,
    delay:0.4,
    duration:0.8,
    stagger:0.2
})

gsap.from("#page1 #video-container",{
    scale:0.9,
    opacity:0,
    delay:1.5,
    duration:0.3,
})

document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y
    })
})

document.querySelector("#child1").addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        transform: 'translate(-50%,-50%) scale(1)',
        
    })
})
document.querySelector("#child1").addEventListener("mouseenter",function(dets){
    gsap.to("#cursor",{
        top:dets.x,
        left:dets.y
        
    })
})

document.querySelectorAll(".child").forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            transform: 'translate(-50%,-50%) scale(1)'
        })
    })
})

document.querySelectorAll(".child").forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            transform: 'translate(-50%,-50%) scale(0)'
        })
    })
})

