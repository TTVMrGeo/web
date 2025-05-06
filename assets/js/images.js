document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const images = document.querySelectorAll(".carousel img");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;
  const imageWidth = images[0].clientWidth;

  // Set initial position
  updateCarousel();

  // Next button click handler
  nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  });

  // Previous button click handler
  prevBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  });

  // Auto-advance every 5 seconds (optional)
  let autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  }, 5000);

  // Pause auto-advance on hover
  carousel.addEventListener("mouseenter", () => {
    clearInterval(autoSlide);
  });

  // Resume auto-advance when mouse leaves
  carousel.addEventListener("mouseleave", () => {
    autoSlide = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
    }, 5000);
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    const newImageWidth = images[0].clientWidth;
    carousel.style.transform = `translateX(-${currentIndex * newImageWidth}px)`;
  });

  // Update carousel position
  function updateCarousel() {
    const currentWidth = images[0].clientWidth;
    carousel.style.transform = `translateX(-${currentIndex * currentWidth}px)`;
  }
});
