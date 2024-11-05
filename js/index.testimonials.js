const indicators = document.querySelectorAll('.indicator');

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
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : Math.ceil(testimonials.length / 3) - 1;
  showTestimonial(currentIndex);
  updateIndicators();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex < Math.ceil(testimonials.length / 3) - 1) ? currentIndex + 1 : 0;
  showTestimonial(currentIndex);
  updateIndicators();
});

showTestimonial(currentIndex);
updateIndicators();
