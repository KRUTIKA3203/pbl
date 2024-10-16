// Mock trek data
const treks = [
    { name: 'Mountain Trek', difficulty: 'Moderate', duration: 5 },
    { name: 'Forest Trail', difficulty: 'Easy', duration: 3 },
    { name: 'Desert Hike', difficulty: 'Hard', duration: 7 }
];

const bookingHistory = [];

// Load available treks and user history
document.addEventListener('DOMContentLoaded', function() {
    loadAvailableTreks();
    loadBookingHistory();
});

// Load available treks
function loadAvailableTreks() {
    const trekList = document.getElementById('availableTreks');
    const trekSelection = document.getElementById('trekSelection');
    treks.forEach(trek => {
        // Display trek details in the trek list
        const trekItem = document.createElement('li');
        trekItem.textContent = `${trek.name} - Difficulty: ${trek.difficulty}, Duration: ${trek.duration} days`;
        trekList.appendChild(trekItem);

        // Add trek options to the booking form
        const option = document.createElement('option');
        option.value = trek.name;
        option.textContent = trek.name;
        trekSelection.appendChild(option);
    });
}

// Handle trek booking form submission
document.getElementById('trekBookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const trekName = document.getElementById('trekSelection').value;
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;

    const newBooking = {
        trek: trekName,
        name: fullName,
        email: email,
        date: new Date().toLocaleDateString()
    };

    // Add the new booking to the booking history
    bookingHistory.push(newBooking);
    loadBookingHistory();
    alert(`Trek ${trekName} successfully booked for ${fullName}`);
    this.reset();
});

// Load booking history
function loadBookingHistory() {
    const historyList = document.getElementById('bookingHistory');
    historyList.innerHTML = ''; // Clear existing history
    bookingHistory.forEach(booking => {
        const listItem = document.createElement('li');
        listItem.textContent = `${booking.name} booked ${booking.trek} on ${booking.date}`;
        historyList.appendChild(listItem);
    });
}
