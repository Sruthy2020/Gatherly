document.getElementById('eventForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log('Booking form submission started'); // Debugging log

    const bookingData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        eventType: document.getElementById('eventType').value,
        date: document.getElementById('date').value,
        details: document.getElementById('details').value,
    };

    console.log('Booking Data:', bookingData); // Debugging log

    try {
        // Show a loading alert
        alert('Submitting your booking, please wait...');

        const response = await fetch('http://localhost:8080/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingData), // Send data as JSON
        });

        console.log('Response received:', response.status); // Debugging log

        if (response.ok) {
            const savedBooking = await response.json();
            alert('🎉 Your booking has been submitted successfully!');
            console.log('Saved Booking:', savedBooking);
            document.getElementById('eventForm').reset(); // Reset the form
        } else if (response.status === 400) {
            const errors = await response.json();
            console.error('Validation Errors:', errors);
            alert('❌ Failed to submit your booking. Please check your input and try again.');
        } else {
            alert('⚠️ Something went wrong. Please try again later.');
        }
    } catch (error) {
        console.error('Submission error:', error);
        alert('🚨 An unexpected error occurred. Please try again later.');
    }
});
