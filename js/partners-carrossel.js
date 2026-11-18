document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".logo-carousel");
  carousels.forEach((carousel) => {

    const viewport = carousel.querySelector(
      ".logo-carousel-viewport"
    );

    const track = carousel.querySelector(
      ".logo-carousel-track"
    );

    const slides = Array.from(
      track.querySelectorAll(".logo-placeholder")
    );

    const panel = carousel.closest(".partner-panel");

    const prevButton = panel.querySelector("[data-prev]");
    const nextButton = panel.querySelector("[data-next]");

    const autoplay = carousel.dataset.autoplay === "true";

    let currentIndex = 0;
    let interval = null;

    function getVisibleSlides() {
      return parseInt(
        getComputedStyle(carousel)
          .getPropertyValue("--slides-visible")
      ) || 1;
    }

    function getMaxIndex() {
      return Math.max(
        0,
        slides.length - getVisibleSlides()
      );
    }

    function updateCarousel() {

      const visible = getVisibleSlides();
      const maxIndex = getMaxIndex();

      currentIndex = Math.min(currentIndex, maxIndex);

      const centered = slides.length <= visible;

      carousel.classList.toggle(
        "is-centered",
        centered
      );

      if (centered) {
        track.style.transform = "translateX(0)";
      } else {

        const slideWidth = 100 / visible;

        track.style.transform =
          `translateX(-${currentIndex * slideWidth}%)`;

      }

      prevButton.disabled = centered || currentIndex === 0;
      nextButton.disabled = centered || currentIndex >= maxIndex;

      prevButton.hidden = centered;
      nextButton.hidden = centered;

    }

    function next() {

      const maxIndex = getMaxIndex();

      if (maxIndex === 0) return;

      currentIndex =
        currentIndex >= maxIndex
          ? 0
          : currentIndex + 1;

      updateCarousel();

    }

    function previous() {

      const maxIndex = getMaxIndex();

      if (maxIndex === 0) return;

      currentIndex =
        currentIndex <= 0
          ? maxIndex
          : currentIndex - 1;

      updateCarousel();

    }

    nextButton.addEventListener("click", () => {
      next();
      restartAutoplay();
    });

    prevButton.addEventListener("click", () => {
      previous();
      restartAutoplay();
    });

    function stopAutoplay() {
      clearInterval(interval);
      interval = null;
    }

    function startAutoplay() {

      stopAutoplay();

      if (!autoplay || getMaxIndex() === 0) return;

      interval = setInterval(() => {
        next();
      }, 5000);

    }

    function restartAutoplay() {
      startAutoplay();
    }

    carousel.addEventListener("mouseenter", stopAutoplay);
    carousel.addEventListener("mouseleave", startAutoplay);
    carousel.addEventListener("focusin", stopAutoplay);
    carousel.addEventListener("focusout", startAutoplay);

    window.addEventListener("resize", () => {
      updateCarousel();
      startAutoplay();
    });

    updateCarousel();
    startAutoplay();

  });

});
