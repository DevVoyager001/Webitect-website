gsap.from(".headline h1", { 
    y: 100,
    opacity: 0,
    delay: 0.4,
    duration: 0.6,
    stagger: 0.3
 });

 gsap.from(".buttons", { 
    y: 100,
    opacity: 0,
    delay: 0.9,
    duration: 0.6,
    stagger: 0.6
 });


//  NAVIGATION ON MOBILE DEVICES
const mob_nav = document.querySelector('.mobile-navbar-button')
const header_cls = document.querySelector('.header')

const open=()=>{
    header_cls.classList.toggle('active');
}

mob_nav.addEventListener('click', open);


// SERVICE SECTION
const serviceHeadline = document.querySelector('.service-headline');
gsap.to(serviceHeadline, {
  opacity: 0.8,
  y: 0,
  duration: 0.1,
  scrollTrigger: {
    trigger: serviceHeadline,
    start: 'top 100%', // Adjust the start position as needed
    end: 'top 50%',   // Adjust the end position as needed
    toggleActions: 'play none none none',
  },
});

const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
  gsap.from(box, {
    opacity: 0,
    scale: 0.5,
    duration: 1,
    scrollTrigger: {
      trigger: box,
      start: 'top 100%', // Adjust the start position as needed
      end: 'top 95%',   // Adjust the end position as needed
      toggleActions: 'play none none none',
      scrub: 1
    },
  });
});


const wegetit = document.querySelector('.we-get-it');
gsap.to(wegetit, {
  opacity: 1,
  y: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: wegetit,
    start: 'top 100%', // Adjust the start position as needed
    end: 'top 50%',   // Adjust the end position as needed
    toggleActions: 'play none none none',
  },
});


// NAVBAR OPACITY DECREASE WHEN SCROLL
const navbar = document.querySelector('.navbar');
const scrollThreshold = 200; // Adjust this value as needed.

window.addEventListener('scroll', () => {
  if (window.scrollY >= scrollThreshold) {
    navbar.classList.add('opaque');
  } else {
    navbar.classList.remove('opaque');
  }
});

// SMOOTH SCROLL method 1
// const homeSection = document.querySelector('.header');
// document.querySelector('.nav-home').addEventListener('click', () => {
//   homeSection.scrollIntoView({ behavior: 'smooth' }); // Corrected the spelling of 'behavior'
// });

// const serviceSection = document.querySelector('.service');
// document.querySelector('.nav-service').addEventListener('click', () => {
//   serviceSection.scrollIntoView({ behavior: 'smooth' }); // Corrected variable name
// });

// const aboutSection = document.querySelector('.about1');
// document.querySelector('.nav-about').addEventListener('click', () => { // Changed 'nav-contact' to 'nav-about'
//   aboutSection.scrollIntoView({ behavior: 'smooth' }); // Corrected variable name
// });

// const contactSection = document.querySelector('.contact');
// document.querySelector('.nav-contact').addEventListener('click', () => {
//   contactSection.scrollIntoView({ behavior: 'smooth' });
// });



// SMOOTH SCROLL method 2


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      const navbarHeight = document.querySelector('.navbar').offsetHeight; // Adjust this based on your actual navbar class

      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop - navbarHeight,
              behavior: 'smooth'
          });
      }
  });
});


  //  2 BUTTONs IN HEADER SECTION 
 const button1 = document.querySelector("#button1")
 button1.addEventListener("click", (e)=>{
    e.preventDefault();

    const targetElement = document.querySelector(".service");

    const navbarHeight = document.querySelector('.navbar').offsetHeight; // Adjust this based on your actual navbar class

    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - navbarHeight,
            behavior: 'smooth'
        });
    }
});


  const contact_section = document.querySelector(".contact")
  const button2 = document.querySelector("#button2")
  button2.addEventListener("click" , ()=>{
    contact_section.scrollIntoView({behavior:"smooth"})
  })

