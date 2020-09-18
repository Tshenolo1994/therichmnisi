

gsap.registerPlugin(ScrollTrigger);


gsap.from(".video-container",{
    scrollTrigger:{
      trigger:".video-container",
      pin: ".video-container",
      toggleActions:"play reverse resume complete",
      start:"center center",
      
      scrub:2,
      opacity:1,
      scale:6,
      pin:".video-container",
   
      pinSpacing:true,
    },
    opacity:.5,
    scale:.6,
    duration:6,
    delay:.5,
 
    ease:"slow"
    })
    gsap.from(".first img",{
        scrollTrigger:{
          trigger:".first img",
      
          toggleActions:"play reverse resume complete",
          start:"center center",
   
          scrub:2,
          opacity:1,
          scale:1,
          pin:".first",
          pinSpacing:true,
        },
        opacity:.1,
        scale:.6,
        duration:6,
        delay:.5,
        ease:"circ"
        })



        gsap.registerPlugin(ScrollTrigger);
        gsap.to('progress', {
          value: 50,
          ease: 'none',
          scrollTrigger: { 
            trigger: "#timeline",
            scrub: .1,
            pin:"#timeline" 
          }
        });
    //SLIDESHOW ************
//this function works

var i = 0; // Start Point
const images = ["./images/coke1.jpg", "./images/coke2.jpg", "./images/coke3.jpg", "./images/coke4.jpg", "./images/coke5.jpg", "./images/coke7.jpg", "./images/coke8.jpg"];
var time = 450; // Time Between Switch

// Image List


// Change Image
function changeImg() {
  document.slide.src = images[i];

  // Check If Index Is Under Max
  if (i < images.length - 1) {
    // Add 1 to Index
    i++;
  } else {
    // Reset Back To O
    i = 0;
  }

  // Run function every x seconds
  setTimeout("changeImg()", time);
}
window.onload = changeImg;





