window.addEventListener('load',function(){
  document.querySelector(".toggle-sttings").addEventListener('click' ,function () {
    // Toggle Class Fa-spin For Rotation on Self
    this.querySelector('svg').classList.toggle("fa-spin");

    // Toggle Class Open On Main Settings Box
    const settingsBox = document.querySelector(".seeting-box");
    if (settingsBox.classList.contains("open")) {
      console.log('hiiiiiiiiii')
      settingsBox.classList.remove("open");
    } else {
      settingsBox.classList.add("open");
    }
  });
  document.querySelector(".navbar-toggler").addEventListener('click' ,function () {
    const settingsBox = document.querySelector("svg");
    if (settingsBox.classList.contains("fa-bars")) {
      console.log('hiiiiiiiiii')
      settingsBox.classList.remove("fa-bars");
      settingsBox.classList.add("fa-xmark");

    } else {
      settingsBox.classList.remove("fa-xmark");
      settingsBox.classList.add("fa-bars");
    }
  });
const colorsLi = document.querySelectorAll(".colors-list li");
// Loop On All List Items
colorsLi.forEach(li => {

  // Click On Every List Items
  li.addEventListener("click", (e) => {

    // Set Color On Root
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

    // Set Color On Local Storage
    localStorage.setItem("color_option", e.target.dataset.color);

    handleActive(e);

  });

});
function handleActive(ev) {

  // Remove Active Class From All Childrens
  ev.target.parentElement.querySelectorAll(".active").forEach(element => {

    element.classList.remove("active");

  });

  // Add Active Class On Self
  ev.target.classList.add("active");

}
let mainColors = localStorage.getItem("color_option");
document.querySelector(".reset-options").onclick = function(){
  //  localStorage.clear();
   localStorage.removeItem("color_option");
  // Reload Window
  window.location.reload()
  };
  
// If There's Color Item In Local Storage
if (mainColors !== null) {

  // console.log('Local Storage Is Not Empty You Can Set It On Root Now');
  // console.log(localStorage.getItem("color_option"));

  document.documentElement.style.setProperty('--main-color', mainColors);

  // Remove Active Class From All Colors List Item
  document.querySelectorAll(".colors-list li").forEach(element => {

    element.classList.remove("active");

    // Add Active Class On Element With Data-Color === Local Storage Item
    if (element.dataset.color === mainColors) {

      // Add Active Class
      element.classList.add("active");

    }

  });

}

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");


if (bulletLocalItem !== null) {

  bulletsSpan.forEach(span => {
   
    span.classList.remove("active");

  });

  if (bulletLocalItem === 'block'){

    bulletsContainer.style.display = 'block';

    document.querySelector(".bullets-option .yes").classList.add("active");

  } else {

    bulletsContainer.style.display = 'none';
    document.querySelector(".bullets-option .no").classList.add("active");
  }

}


bulletsSpan.forEach(span => {

  span.addEventListener("click", (e) => {

    if (span.dataset.display === 'show') {

      bulletsContainer.style.display = 'block';


      localStorage.setItem("bullets_option", 'block');


    } else {

      bulletsContainer.style.display = 'none';


      localStorage.setItem("bullets_option", 'none');




    }
     handleActive(e);

  });

});
 // Get the progress-wrap element
 const progressWrap = document.querySelector('.progress-wrap');

 // Add a click event listener to the progress-wrap
 progressWrap.addEventListener('click', () => {
   // Scroll to the top of the page
   window.scrollTo({
     top: 0,
     behavior: 'smooth'
   });
 });

 // Show the progress-wrap when the user scrolls down
 window.addEventListener('scroll', () => {
   if (window.pageYOffset > 100) {
     progressWrap.classList.add('active-progress');
   } else {
     progressWrap.classList.remove('active-progress');
   }
 });

// Get all the card-overlay-container elements
const cardOverlayContainers = document.querySelectorAll('.card');

// Add event listeners to each container
cardOverlayContainers.forEach((container) => {
  container.addEventListener('mouseenter', handleMouseEnter);
  container.addEventListener('mouseleave', handleMouseLeave);
});

function handleMouseEnter(e) {
  const overlay = e.currentTarget.querySelector('.overlay');
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  let direction;
  if (x < rect.width / 2 && y < rect.height / 2) {
    direction = 'top-left';
  } else if (x >= rect.width / 2 && y < rect.height / 2) {
    direction = 'top-right';
  } else if (x < rect.width / 2 && y >= rect.height / 2) {
    direction = 'bottom-left';
  } else {
    direction = 'bottom-right';
  }

  overlay.classList.add(`overlay--${direction}`);
  overlay.classList.add('show');
}

function handleMouseLeave(e) {
  const overlay = e.currentTarget.querySelector('.overlay');
  overlay.classList.remove('show');
  overlay.classList.forEach((cls) => {
    if (cls.startsWith('overlay--')) {
      overlay.classList.remove(cls);
    }
  });
}
})






var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    loop:true,
  });
  var swiperContainer = document.querySelector('.mySwiper');

// Add event listeners to pause and resume auto-play
swiperContainer.addEventListener('mouseenter', function() {
  mySwiper.autoplay.stop();
});

swiperContainer.addEventListener('mouseleave', function() {
  mySwiper.autoplay.start();
});
  /* ===========================
             wow 
       =========================== */
       function wowActivator() {
        wow = new WOW({
            offset: 0
        });
        wow.init();
    }
    wowActivator();

  $('#Learn').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
flatpickr("#datepicker", {
  inline: true,
  mode: "multiple",
  dateFormat: "Y-m-d",
  showMonths: 1,
  weekNumbers: true
});

$('#testimonial-cars').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots:false,
  navText:[
    `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#fff" d="M17.59 18L19 16.59L14.42 12L19 7.41L17.59 6l-6 6z"/><path fill="#fff" d="m11 18l1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z"/></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#fff" d="M6.41 6L5 7.41L9.58 12L5 16.59L6.41 18l6-6z"/><path fill="#fff" d="m13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"/></svg>`
  ],
  
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})


const myElement = document.getElementById('nav');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
      myElement.classList.add('nav-scroll');
    } else {
      myElement.classList.remove('nav-scroll');
    }
  });


  

//**************************************************** */
  //Toggle Spin Class On Icon
