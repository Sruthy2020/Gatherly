const navbarToggle = document.getElementById('navbarToggle');
const navbarLinks = document.querySelector('.navbar-links');

navbarToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

const carouselTrack = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Function to scroll carousel
function scrollCarousel(direction) {
    const cardWidth = 250 + 20; // Card width + gap
    carouselTrack.scrollBy({
        left: direction * cardWidth,
        behavior: 'smooth',
    });
}

// Auto-scroll functionality
function autoScroll() {
    scrollCarousel(1); // Scroll to the right
    setTimeout(() => {
        if (
            carouselTrack.scrollLeft + carouselTrack.clientWidth >=
            carouselTrack.scrollWidth
        ) {
            carouselTrack.scrollLeft = 0; // Reset to the beginning
        }
    }, 600); // Timeout for smooth scrolling
}

// Event Listeners
prevBtn.addEventListener('click', () => scrollCarousel(-1));
nextBtn.addEventListener('click', () => scrollCarousel(1));

// Set auto-scroll interval
setInterval(autoScroll, 3000); // Auto-scroll every 3 seconds
