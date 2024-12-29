document.getElementById('eventForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const eventType = document.getElementById('eventType').value;
    const date = document.getElementById('date').value;
    const details = document.getElementById('details').value;

    // Simulate form submission
    alert(`Thank you for booking an event, ${name}! We will get in touch with you soon.`);
    console.log({
        name,
        email,
        phone,
        eventType,
        date,
        details,
    });

    // Reset form
    document.getElementById('eventForm').reset();
});
