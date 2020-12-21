// Logo resizing
resize = function() {
  const imageWidth = $("#lottie__logo").width();

  // Assign distance for resize to take place over
  let maxScrollDist = 300;
  maxScrollDist = Math.min(maxScrollDist, $(window).height());
  
  const widthAtMaxDist = 70;
  const widthDiff = imageWidth - widthAtMaxDist;
  const scrollDelta = (widthDiff / maxScrollDist);

  $(window).scroll(function() {
    const scrollPos = Math.min($(document).scrollTop(), maxScrollDist);
    const sumScrollDelta = Math.floor(scrollPos * scrollDelta);
    const newWidth = imageWidth - sumScrollDelta;
    $('#lottie__logo').css('width', newWidth);
  });
}
resize();

// Logo animation
let logo = document.getElementById("lottie__logo");
let direction = -1; // normal play direction

let logoAnimation = bodymovin.loadAnimation({
  container: logo,
  path: 'res/logo/logo_data.json',
  renderer: 'svg',
  loop: false,
  autoplay: false,
  name: "logo",
});
logoAnimation.goToAndStop(30, true);
let visible = true;

function disappear() {
  logoAnimation.setDirection(direction);
  logoAnimation.goToAndPlay(30, true);
  visible = false;
}

function appear() {
    logoAnimation.setDirection(-direction);
    logoAnimation.goToAndPlay(0, true);
    visible = true;
}

// Truck animation
let truck = document.getElementById("lottie__truck");

let truckAnimation = bodymovin.loadAnimation({
  container: truck,
  path: 'res/truck/truck_data.json',
  renderer: 'svg',
  loop: true,
  autoplay: true,
  name: "truck",
  rendererSettings: {
  	preserveAspectRatio: 'xMidYMid meet'
  }
});


// Call preventDefault() to ensure event is handled only once
// if device has touch too
logo.addEventListener('click', (e) => {
  e.preventDefault();
  disappear();
  window.scrollTo(0, 0);
}, false);
logo.addEventListener('mouseleave', (e) => {
    // Don't reanimate unless logo has been clicked
  if (!visible) appear();
}, false);

logo.addEventListener('touchstart', (e) => {
  e.preventDefault();
  appear();
  window.scrollTo(0, 0);
}, false);

// Nav stuff
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  })
});


// Overview transition 
$(window).on("load", function() {
  $(window).scroll(function() {
    const bottom_of_window = $(this).scrollTop() + $(this).innerHeight();

    $('.benefit').each(function(i) {
        const bottom_of_object = $(this).offset().top + $(this).outerHeight();
        
        /* If the object is completely visible in the window, fade in */
        if(bottom_of_window > bottom_of_object) {
            $(this).animate({'opacity':'1'},500);
            // $(this).delay((i++) * 500).fadeTo(500, 1);
        } else {
          
        }
    }); 
  }).scroll();
});

// Form submission success
const url = window.location.href;

// Parse url for string 'success' and show/hide buttons appropriately
if (url.search('success') > 0) {
  $('#submit').css('display', 'none');
  $('#submitted').css('display', 'inline-block');
  $('#success').css('display', 'inline-block');
}