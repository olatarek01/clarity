document.addEventListener("DOMContentLoaded", function () {

  const carousel = document.querySelector('#carouselExampleIndicators');
  const bsCarousel = bootstrap.Carousel.getOrCreateInstance(carousel);

  let isRewinding = false;

  carousel.addEventListener('slid.bs.carousel', function (event) {

    const slides = carousel.querySelectorAll('.carousel-item');
    const lastIndex = slides.length - 1;

  
    if (!isRewinding && event.to === lastIndex) {
      isRewinding = true;

    
      bsCarousel.pause();

      let i = lastIndex - 1;

     
      const rewind = setInterval(() => {
        bsCarousel.to(i);


        if (i === 0) {
          clearInterval(rewind);

         
          isRewinding = false;
          bsCarousel.cycle();
        } else {
          i--;
        }

      }, 1); 
    }
  });

});

const navLinks = document.querySelectorAll(".nav-link");

function setActiveLink() {
  let fromTop = window.scrollY + 150; 

  navLinks.forEach(link => {
    const section = document.querySelector(link.hash); 

    if (!section) return;

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", setActiveLink);


const cards = document.querySelectorAll('.frash');


cards.forEach(card => {
  card.addEventListener('click', () => {


    cards.forEach(c => c.classList.remove('selected'));

    card.classList.add('selected');
  });
});