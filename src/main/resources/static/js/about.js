document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.count');

    const runCounter = (counter) => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const suffix = counter.getAttribute('data-suffix') || ''; // Get suffix or default to empty
            const count = +counter.innerText.replace(suffix, '');

            // Check if the target is 8 for slower animation
            const speed = target === 8 ? 400 : 200;
            const increment = target / speed;
            const interval = target === 8 ? 40 : 20;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment) + suffix;
                setTimeout(updateCount, interval);
            } else {
                counter.innerText = target + suffix; // Append the suffix
            }
        };

        updateCount();
    };

    // Using Intersection Observer to trigger the animation
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    runCounter(counter);
                    observer.unobserve(counter); // Ensure animation runs only once
                }
            });
        },
        {threshold: 0.5} // Trigger when 50% of the element is visible
    );

    counters.forEach(counter => observer.observe(counter));
});

