function loading(){
    var t1 = gsap.timeline();
    t1.to(".loader1",{
        top:"-100%",
        delay:0.2,
        duration:1,
        ease:"expose.out"
    })
    t1.to(".loader11",{
        top:"0%",
        duration:1,
        ease:"expose.out"
    })
    t1.to(".loader2 p",{
        color:"black"
    })
    t1.to(".loader2",{
        opacity:0
    },"move")
    t1.to(".loader2",{
        display:"none"
    },"move")
    t1.from(".navbar",{
        opacity:0,
        y:-50,
        duration:1
    },"move")
    t1.from(".navbar2",{
        opacity:0,
        y:50,
        duration:1
    },"move")
}
loading();
function page2nd(){
    var page=document.querySelector(".page2")
    var boxes = document.querySelectorAll(".box1")
    boxes.forEach(function(box){
        box.addEventListener("mouseenter",function(){
            var img = box.getAttribute("data-img")
            page.style.backgroundImage=`url(${img})`
            page.style.backgroundSize="cover"
            page.style.backgroundRepeat="No-repeat"
            page.style.backgrpundPosition="center"
        })
    })
}
function mainall(){
    var t2=gsap.timeline();
    t2.to("#one",{
        onComplete:function(){
            first();
        }, 
    })
    t2.to("#two",{
        delay:2,
        onComplete:function(){
            second();
        }
    })
    t2.to("#third",{
        delay:2,
        onComplete:function(){
            third();
        }
    })
    t2.to("#four",{
        delay:2,
        onComplete:function(){
            four();
        }
    })
    t2.to("#five",{
        delay:2,
        onComplete:function(){
            five();
        }
    })
    
}
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
var page3=document.querySelector(".page3")
const windowwidth=window.innerWidth;
if(windowwidth<=1200){
    setInterval(function(){
        mainall();
    },10000)
    mobile();
}
else{
    page2nd();
}
function first(){
    var page=document.querySelector(".page2")
    var div1 = document.querySelector("#one")
    var img1 =div1.getAttribute("data-img")
    page.style.backgroundImage=`url(${img1})`
    page.style.backgroundSize="cover"
    page.style.backgroundRepeat="No-repeat"
    page.style.backgroundPosition="center"
    var ans1= document.querySelector("#one h1")
    ans1.style.color="black"
    ans1.style.fontStyle="italic"
    var ans2= document.querySelector("#two h1")
    ans2.style.color="white"
    ans2.style.fontStyle="normal"
    var ans3= document.querySelector("#third h1")
    ans3.style.color="white"
    ans3.style.fontStyle="normal"
    var ans4= document.querySelector("#four h1")
    ans4.style.color="white"
    ans4.style.fontStyle="normal"
    var ans5= document.querySelector("#five h1")
    ans5.style.color="white"
    ans5.style.fontStyle="normal"
    var line1=document.querySelector("#one p")
    line1.style.display="block"
    var line2=document.querySelector("#two p")
    line2.style.display="none"
    var line3=document.querySelector("#third p")
    line3.style.display="none"
    var line4=document.querySelector("#four p")
    line4.style.display="none"
    var line5=document.querySelector("#five p")
    line5.style.display="none"
}
function second(){
    var page=document.querySelector(".page2")
    var div1 = document.querySelector("#two")
    var mover2 = document.querySelector("#two .mover")
    var img1 =div1.getAttribute("data-img")
    page.style.backgroundImage=`url(${img1})`
    page.style.backgroundSize="cover"
    page.style.backgroundRepeat="No-repeat"
    page.style.backgroundPosition="center"
    var ans= document.querySelector("#two h1")
    ans.style.color="black"
    ans.style.fontStyle="italic"
    var ans2= document.querySelector("#one h1")
    ans2.style.color="white"
    ans2.style.fontStyle="normal"
    var ans3= document.querySelector("#third h1")
    ans3.style.color="white"
    ans3.style.fontStyle="normal"
    var ans4= document.querySelector("#four h1")
    ans4.style.color="white"
    ans4.style.fontStyle="normal"
    var ans5= document.querySelector("#five h1")
    ans5.style.color="white"
    ans5.style.fontStyle="normal"
    var line2=document.querySelector("#two p")
    line2.style.display="block"
    var line1=document.querySelector("#one p")
    line1.style.display="none"
    var line3=document.querySelector("#third p")
    line3.style.display="none"
    var line4=document.querySelector("#four p")
    line4.style.display="none"
    var line5=document.querySelector("#five p")
    line5.style.display="none"
}
function third(){
    var page=document.querySelector(".page2")
    var div1 = document.querySelector("#third")
    var mover1 = document.querySelector("#third .mover")
    var img1 =div1.getAttribute("data-img")
    page.style.backgroundImage=`url(${img1})`
    page.style.backgroundSize="cover"
    page.style.backgroundRepeat="No-repeat"
    page.style.backgroundPosition="center"
    var ans= document.querySelector("#third h1")
    ans.style.color="black"
    ans.style.fontStyle="italic"
    var ans2= document.querySelector("#one h1")
    ans2.style.color="white"
    ans2.style.fontStyle="normal"
    var ans3= document.querySelector("#two h1")
    ans3.style.color="white"
    ans3.style.fontStyle="normal"
    var ans4= document.querySelector("#four h1")
    ans4.style.color="white"
    ans4.style.fontStyle="normal"
    var ans5= document.querySelector("#five h1")
    ans5.style.color="white"
    ans5.style.fontStyle="normal"
    var line3=document.querySelector("#third p")
    line3.style.display="block"
    var line1=document.querySelector("#one p")
    line1.style.display="none"
    var line2=document.querySelector("#two p")
    line2.style.display="none"
    var line4=document.querySelector("#four p")
    line4.style.display="none"
    var line5=document.querySelector("#five p")
    line5.style.display="none"
}
function four(){
    var page=document.querySelector(".page2")
    var div1 = document.querySelector("#four")
    var mover1 = document.querySelector("#four .mover")
    var img1 =div1.getAttribute("data-img")
    page.style.backgroundImage=`url(${img1})`
    page.style.backgroundSize="cover"
    page.style.backgroundRepeat="No-repeat"
    page.style.backgroundPosition="center"
    var ans= document.querySelector("#four h1")
    ans.style.color="black"
    ans.style.fontStyle="italic"
    var ans2= document.querySelector("#one h1")
    ans2.style.color="white"
    ans2.style.fontStyle="normal"
    var ans3= document.querySelector("#third h1")
    ans3.style.color="white"
    ans3.style.fontStyle="normal"
    var ans4= document.querySelector("#two h1")
    ans4.style.color="white"
    ans4.style.fontStyle="normal"
    var ans5= document.querySelector("#five h1")
    ans5.style.color="white"
    ans5.style.fontStyle="normal"
    var line4=document.querySelector("#four p")
    line4.style.display="block"
    var line1=document.querySelector("#one p")
    line1.style.display="none"
    var line2=document.querySelector("#two p")
    line2.style.display="none"
    var line3=document.querySelector("#third p")
    line3.style.display="none"
    var line5=document.querySelector("#five p")
    line5.style.display="none"
}
function five(){
    var page=document.querySelector(".page2")
    var div1 = document.querySelector("#five")
    var mover1 = document.querySelector("#five .mover")
    var img1 =div1.getAttribute("data-img")
    page.style.backgroundImage=`url(${img1})`
    page.style.backgroundSize="cover"
    page.style.backgroundRepeat="No-repeat"
    page.style.backgroundPosition="center"
    var ans= document.querySelector("#five h1")
    ans.style.color="black"
    ans.style.fontStyle="italic"
    var ans2= document.querySelector("#one h1")
    ans2.style.color="white"
    ans2.style.fontStyle="normal"
    var ans3= document.querySelector("#third h1")
    ans3.style.color="white"
    ans3.style.fontStyle="normal"
    var ans4= document.querySelector("#four h1")
    ans4.style.color="white"
    ans4.style.fontStyle="normal"
    var ans5= document.querySelector("#two h1")
    ans5.style.color="white"
    ans5.style.fontStyle="normal"
    var line5=document.querySelector("#five p")
    line5.style.display="block"
    var line1=document.querySelector("#one p")
    line1.style.display="none"
    var line2=document.querySelector("#two p")
    line2.style.display="none"
    var line3=document.querySelector("#third p")
    line3.style.display="none"
    var line4=document.querySelector("#four p")
    line4.style.display="none"
}
function codepen(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
    
}
codepen();
function mobile(){
    gsap.to("#loop1",{
        opacity:1,
        scrollTrigger:{
            trigger:"#loop1",
            scroller:"body",
            start:"top 30%",
            end:"top 10%",
            scrub:true
        }
    })
    gsap.to("#loop2",{
        opacity:1,
        scrollTrigger:{
            trigger:"#loop2",
            scroller:"body",
            start:"top 30%",
            end:"top 10%",
            scrub:true
        }
    })
    gsap.to("#loop3",{
        opacity:1,
        scrollTrigger:{
            trigger:"#loop3",
            scroller:"body",
            start:"top 30%",
            end:"top 10%",
            scrub:true
        }
    })
    gsap.to("#loop4",{
        opacity:1,
        scrollTrigger:{
            trigger:"#loop4",
            scroller:"body",
            start:"top 30%",
            end:"top 10%",
            scrub:true
        }
    })
    gsap.to("#loop5",{
        opacity:1,
        scrollTrigger:{
            trigger:"#loop5",
            scroller:"body",
            start:"top 30%",
            end:"top 10%",
            scrub:true
        }
    })
    gsap.to("#loop11",{
        opacity:1,
        scrollTrigger:{
            trigger:"#loop11",
            scroller:"body",
            start:"top 30%",
            end:"top 10%",
            scrub:true
        }
    })
    gsap.to("#loop12",{
        opacity:1,
        scrollTrigger:{
            trigger:"#loop12",
            scroller:"body",
            start:"top 30%",
            end:"top 10%",
            scrub:true
        }
    })
    gsap.to("#loop13",{
        opacity:1,
        scrollTrigger:{
            trigger:"#loop13",
            scroller:"body",
            start:"top 30%",
            end:"top 10%",
            scrub:true
        }
    })
    gsap.to("#loop14",{
        opacity:1,
        scrollTrigger:{
            trigger:"#loop14",
            scroller:"body",
            start:"top 30%",
            end:"top 10%",
            scrub:true
        }
    })
    gsap.to("#loop15",{
        opacity:1,
        scrollTrigger:{
            trigger:"#loop15",
            scroller:"body",
            start:"top 30%",
            end:"top 10%",
            scrub:true
        }
    })
    gsap.to("#loop21",{
        opacity:1,
        scrollTrigger:{
            trigger:"#loop21",
            scroller:"body",
            start:"top 30%",
            end:"top 10%",
            scrub:true
        }
    })
    gsap.to("#loop22",{
        opacity:1,
        scrollTrigger:{
            trigger:"#loop22",
            scroller:"body",
            start:"top 30%",
            end:"top 10%",
            scrub:true
        }
    })
    gsap.to("#loop23",{
        opacity:1,
        scrollTrigger:{
            trigger:"#loop23",
            scroller:"body",
            start:"top 30%",
            end:"top 10%",
            scrub:true
        }
    })
    gsap.to("#loop24",{
        opacity:1,
        scrollTrigger:{
            trigger:"#loop24",
            scroller:"body",
            start:"top 30%",
            end:"top 10%",
            scrub:true
        }
    })
    gsap.to("#loop25",{
        opacity:1,
        scrollTrigger:{
            trigger:"#loop25",
            scroller:"body",
            start:"top 30%",
            end:"top 10%",
            scrub:true
        }
    })
}
var upper=document.querySelector(".naver");
var plus=document.querySelector(".navbar img");
plus.addEventListener('click',function(){
   upper.style.top="0";
})
var plus2=document.querySelector(".naver1 img");
plus2.addEventListener('click',function(){
    upper.style.top="-150%";
 })

