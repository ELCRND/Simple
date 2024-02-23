import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
const searchForm = document.querySelector(".searchForm");
const searchInput = document.querySelector(".searchForm__input");
const searchButton = document.querySelector(".btn__search");
const resetButton = document.querySelector(".resetButton");

searchButton.addEventListener("click", () =>
  setTimeout(() => {
    searchForm.classList.toggle("hidden");
  }, 250)
);
resetButton.addEventListener("click", () => (searchInput.value = ""));

const swiper = new Swiper(".products_swiper", {
  freeMode: true,
  slidesPerView: "auto",
  slidesOffsetBefore: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
});
const mediaQuery = window.matchMedia("(min-width: 768px)");
function handleTabletChange(e) {
  if (e.matches) {
    swiper.setProgress(0, 500);
    swiper.disable();
  } else {
    swiper.enable();
  }
}
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);
