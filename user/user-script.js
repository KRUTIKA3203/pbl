// Sample trek data
const treks = [
    { name: 'Mountain Trek', difficulty: 'Moderate', duration: 5 },
    { name: 'Forest Trail', difficulty: 'Easy', duration: 3 },
    { name: 'Desert Hike', difficulty: 'Hard', duration: 7 },
    { name: 'River Adventure', difficulty: 'Moderate', duration: 4 }
];

const bookingHistory = [];

// Load treks and history on page load
document.addEventListener('DOMContentLoaded', function() {
    loadTrekCards();
    loadBookingHistory();
});

// Load available treks into cards
function loadTrekCards() {
    const trekCardsContainer = document.getElementById('trekCards');
    const trekSelection = document.getElementById('trekSelection');

    treks.forEach(trek => {
        // Create trek cards
        const trekCard = document.createElement('div');
        trekCard.classList.add('trek-card');
        trekCard.innerHTML = `
            <h3>${trek.name}</h3>
            <p>Difficulty: ${trek.difficulty}</p>
            <p>Duration: ${trek.duration} days</p>
        `;
        trekCardsContainer.appendChild(trekCard);

        // Add trek options to booking form
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

    bookingHistory.push(newBooking);
    loadBookingHistory();
    alert(`Trek ${trekName} successfully booked for ${fullName}!`);
    this.reset();
});

// Load booking history
function loadBookingHistory() {
    const historyContainer = document.getElementById('bookingHistory');
    historyContainer.innerHTML = ''; // Clear previous history

    if (bookingHistory.length === 0) {
        historyContainer.innerHTML = '<p>No bookings yet. Book your first trek!</p>';
    } else {
        bookingHistory.forEach(booking => {
            const historyItem = document.createElement('div');
            historyItem.classList.add('history-item');
            historyItem.innerHTML = `${booking.name} booked ${booking.trek} on ${booking.date}`;
            historyContainer.appendChild(historyItem);
        });
    }
}
