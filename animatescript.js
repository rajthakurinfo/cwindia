


gsap.from(".aboutsection", {
    
   scrollTrigger:{
    trigger:".aboutsection",
    scroller:"body",
   //  markers:true,
    end:"120% center ",
    start:"bottom bottom",
    scrub:5,
    stagger:3,
   },
  y:"-90%",
   duration:2,
   ease: "esasIn",
   

  });

gsap.from(".aboutsecond", {
    
   scrollTrigger:{
    trigger:".aboutsecond",
    scroller:"body",
   //  markers:true,
    end:"110% center ",
    start:"top bottom",
    scrub:5,
    stagger:1,
   },
//   y:"-90%",
   opacity:0,
duration:2,
   ease: "esasIn",
   

  });

  gsap.from(".sers-hover", {
    
   scrollTrigger:{
    trigger:".sers-hover",
    scroller:"body",
   //  markers:true,
    end:"140% 60%",
    start:"top 80%",
    scrub:1,
       },
//   x:"-80%",
y:"50%",
   
duration:1,
   ease: "bounce",
   stagger:1,
   

  });