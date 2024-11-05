document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector(".testimonials__carousel");
  const testimonials = document.querySelectorAll(".testimonial");
  const prevButton = document.createElement("button");
  const nextButton = document.createElement("button");

  let currentIndex = 0;

  prevButton.innerHTML = "&#10094;";
  nextButton.innerHTML = "&#10095;";
  prevButton.className = "carousel-prev";
  nextButton.className = "carousel-next";

  carousel.appendChild(prevButton);
  carousel.appendChild(nextButton);

  function showTestimonial(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  prevButton.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : testimonials.length - 1;
    showTestimonial(currentIndex);
  });

  nextButton.addEventListener("click", () => {
    currentIndex = currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0;
    showTestimonial(currentIndex);
  });

  setInterval(() => {
    currentIndex = currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0;
    showTestimonial(currentIndex);
  }, 5000); 

  showTestimonial(currentIndex);
});
