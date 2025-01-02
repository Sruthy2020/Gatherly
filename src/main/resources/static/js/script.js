// Navbar Toggle for Responsive Menu
const navbarToggle = document.getElementById('navbarToggle');
const navbarLinks = document.querySelector('.navbar-links');

navbarToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

// Carousel Auto-scroll for Services/Features Section
const carouselTrack = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

if (carouselTrack) {
    // Function to scroll carousel manually
    function scrollCarousel(direction) {
        const cardWidth = 250 + 20; // Adjust to card width + gap
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

    // Event Listeners for Buttons
    prevBtn?.addEventListener('click', () => scrollCarousel(-1));
    nextBtn?.addEventListener('click', () => scrollCarousel(1));

    // Set auto-scroll interval
    setInterval(autoScroll, 3000); // Auto-scroll every 3 seconds
}
document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".testimonials-carousel");
    const items = document.querySelectorAll(".testimonial-item");
    let index = 0;
    let autoScrollInterval;
    let isUserScrolling = false;

    if (track && items.length > 0) {
        const itemWidth = items[0].offsetWidth + 20; // Item width + gap
        const visibleItems = Math.floor(track.parentElement.offsetWidth / itemWidth); // Fully visible items count
        const totalItems = items.length;

        // Set track width based on items
        track.style.width = `${itemWidth * totalItems}px`;

        // Update carousel transform
        const updateTransform = () => {
            track.style.transform = `translateX(-${index * itemWidth}px)`;
        };

        // Auto-scroll functionality
        const autoScroll = () => {
            if (!isUserScrolling) {
                if (index + visibleItems >= totalItems) {
                    index = 0; // Reset to the beginning
                } else {
                    index++;
                }
                updateTransform();
            }
        };

        // Detect user interaction
        track.addEventListener("scroll", () => {
            isUserScrolling = true;
            clearTimeout(autoScrollInterval);

            // Resume auto-scroll after 3 seconds of inactivity
            setTimeout(() => {
                isUserScrolling = false;
            }, 3000);
        });

        // Start auto-scrolling every 3 seconds
        const startAutoScroll = () => {
            autoScrollInterval = setInterval(autoScroll, 3000);
        };

        // Stop auto-scroll
        const stopAutoScroll = () => {
            clearInterval(autoScrollInterval);
        };

        // Responsive: Adjust carousel on window resize
        window.addEventListener("resize", () => {
            stopAutoScroll();
            const newVisibleItems = Math.floor(track.parentElement.offsetWidth / itemWidth);
            index = Math.min(index, totalItems - newVisibleItems); // Adjust index for visible items
            updateTransform();
            startAutoScroll();
        });

        // Initialize auto-scroll
        startAutoScroll();
    }
});
document.getElementById('contactForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log('Form submission started'); // Debugging log

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    console.log('Form Data:', formData); // Debugging log

    try {
        // Show a loading alert
        alert('Sending your message, please wait...');

        const response = await fetch('http://localhost:8080/api/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData), // Send data as JSON
        });

        console.log('Response received:', response.status); // Debugging log

        if (response.ok) {
            alert('🎉 Message sent successfully! We will get back to you shortly.');
            document.getElementById('contactForm').reset(); // Reset the form
        } else if (response.status === 400) {
            const errors = await response.json();
            console.error('Validation Errors:', errors);
            alert('❌ Failed to send message. Please check your input and try again.');
        } else {
            alert('⚠️ Something went wrong. Please try again later.');
        }
    } catch (error) {
        console.error('Error during submission:', error);
        alert('🚨 An unexpected error occurred. Please try again later.');
    }
});

