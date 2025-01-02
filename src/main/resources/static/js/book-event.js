document.getElementById('eventForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const bookingData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        eventType: document.getElementById('eventType').value,
        date: document.getElementById('date').value,
        details: document.getElementById('details').value,
    };

    try {
        const response = await fetch('http://localhost:8080/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingData),
        });

        if (response.ok) {
            const savedBooking = await response.json();
            alert('Your booking has been submitted successfully!');
            console.log('Saved Booking:', savedBooking);
            document.getElementById('eventForm').reset();
        } else {
            const errorData = await response.json();
            console.error('Error:', errorData);
            alert('Failed to submit your booking. Please try again.');
        }
    } catch (error) {
        console.error('Submission error:', error);
        alert('An error occurred while submitting your booking. Please try again later.');
    }
});
