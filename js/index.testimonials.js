const carousel = document.querySelector('.testimonials__carousel');
const testimonials = document.querySelectorAll('.testimonial');
const prevButton = document.createElement('button');
const nextButton = document.createElement('button');

let currentIndex = 0;

prevButton.innerHTML = '&#10094;'; 
nextButton.innerHTML = '&#10095;'; 
prevButton.className = 'carousel-prev';
nextButton.className = 'carousel-next';

carousel.parentNode.appendChild(prevButton);
carousel.parentNode.appendChild(nextButton);

function showTestimonial(index) {
  const offset = index * 100; 
  carousel.style.transform = `translateX(-${offset}%)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
  showTestimonial(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
  showTestimonial(currentIndex);
});

showTestimonial(currentIndex);
