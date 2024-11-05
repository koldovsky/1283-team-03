const testimonials = document.querySelectorAll('.testimonial');
const indicators = document.querySelectorAll('.indicator');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.style.display = (i === index) ? 'block' : 'none';
  });
}

function updateIndicators() {
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentIndex);
  });
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentIndex = index;
    showTestimonial(currentIndex);
    updateIndicators();
  });
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
  showTestimonial(currentIndex);
  updateIndicators();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
  showTestimonial(currentIndex);
  updateIndicators();
});

showTestimonial(currentIndex);
updateIndicators();
