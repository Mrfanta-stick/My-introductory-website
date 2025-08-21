const figures = document.querySelectorAll("main figure img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  lightbox.style.display = "flex";
  lightboxImg.src = figures[currentIndex].src;
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function showPrev() {
  currentIndex = (currentIndex - 1 + figures.length) % figures.length;
  lightboxImg.src = figures[currentIndex].src;
}

function showNext() {
  currentIndex = (currentIndex + 1) % figures.length;
  lightboxImg.src = figures[currentIndex].src;
}

// Event listeners
figures.forEach((img, index) => {
  img.addEventListener("click", () => openLightbox(index));
});

closeBtn.addEventListener("click", closeLightbox);
prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);

// Close on click outside or Esc
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") showPrev();
  if (e.key === "ArrowRight") showNext();
});
