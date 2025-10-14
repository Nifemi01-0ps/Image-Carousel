const track = document.querySelector(".slideshow-track");
const slides = Array.from(document.querySelectorAll(".slide"));
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;

slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) {
        dot.classList.add("active");
    };
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = Array.from(document.querySelector(".dot"));

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex -1 + slides.length) % slides.length;
    updateCarousel();
});

setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}, 5000);
