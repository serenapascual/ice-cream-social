// Logo stuff
resize = function() {
  const imageWidth = $("#lottie").width();

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
    $('#lottie').css('width', newWidth);
  });
}
resize();

let logo = document.getElementById("lottie");
let direction = -1; // normal play direction

let logoAnimation = bodymovin.loadAnimation({
  container: logo,
  path: 'res/data.json',
  renderer: 'svg',
  loop: false,
  autoplay: false,
  name: "logo",
});
logoAnimation.goToAndStop(30, true);
let visible = true;

logo.addEventListener('click', (e) => {
  logoAnimation.setDirection(direction);
  logoAnimation.goToAndPlay(30, true);
  visible = false;
});

logo.addEventListener('mouseleave', (e) => {
  if (!visible) {
    logoAnimation.setDirection(-direction);
    logoAnimation.goToAndPlay(0, true);
    visible = true;
  }
});

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
const message = document.getElementById('submitted');

// Parse url for string 'success' and show/hide buttons appropriately
if (url.search('success') > 0) {
  $('#submit').css('display', 'none');
  $('#submitted').css('display', 'inline-block');
  $('#success').css('display', 'inline-block');
}