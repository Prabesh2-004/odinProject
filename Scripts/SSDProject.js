//login and sign in 
const signupBtn = document.querySelector('.signup-button-js');
const signupBox = document.querySelector('.signup-box-container');
const signupLink = document.querySelector('.signup-link-js');

signupBtn.addEventListener('click', () => {
    signupBox.style.display = 'flex';
    signinBox.style.display = 'none';
});
signupLink.addEventListener('click', () => {
    signupBox.style.display = 'flex';
    signinBox.style.display = 'none';
});

const signinLink = document.querySelector('.signin-link-js');
const signinBox = document.querySelector('.signin-box-container');

signinLink.addEventListener('click', () => {
    signinBox.style.display = 'flex';
    signupBox.style.display = 'none';
});



//menu-drop down 
const menuContainer = document.querySelector('.menu-container');
const menu = document.querySelector('.menu');

menu.addEventListener('mouseover', () => {
    menuContainer.style.display = 'flex';
    signinBox.style.display = 'none';
    signupBox.style.display = 'none';

});
menu.addEventListener('mouseout', () => {
    menuContainer.style.display = 'none';
    
});

menuContainer.addEventListener('mouseover', () => {
    menuContainer.style.display = 'flex';
});
menuContainer.addEventListener('mouseout', () => {
    menuContainer.style.display = 'none';
});

//slide-animation
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.dots');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    let intervalId;
    const slideInterval = 5000; // 5 seconds
  
    // Create dots
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
  
    const dots = document.querySelectorAll('.dot');
  
    // Update slides
    function updateSlider() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Update active classes
      slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentIndex);
      });
      
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }
  
    // Go to specific slide
    function goToSlide(index) {
      currentIndex = index;
      if (currentIndex >= slides.length) currentIndex = 0;
      if (currentIndex < 0) currentIndex = slides.length - 1;
      updateSlider();
      resetInterval();
    }
  
    // Next slide
    function nextSlide() {
      goToSlide(currentIndex + 1);
    }
  
    // Previous slide
    function prevSlide() {
      goToSlide(currentIndex - 1);
    }
  
    // Start auto-sliding
    function startInterval() {
      intervalId = setInterval(nextSlide, slideInterval);
    }
  
    // Reset interval
    function resetInterval() {
      clearInterval(intervalId);
      startInterval();
    }
  
    // Event listeners
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetInterval();
    });
  
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetInterval();
    });
  
    // Pause on hover
    track.addEventListener('mouseenter', () => {
      clearInterval(intervalId);
    });
  
    track.addEventListener('mouseleave', startInterval);
  
    // Initialize
    updateSlider();
    startInterval();
  });

