// Mock data
const customers = [
    { name: 'John Doe', email: 'john@example.com', trek: 'Mountain Trek', paid: 500 },
    { name: 'Jane Smith', email: 'jane@example.com', trek: 'Forest Trail', paid: 300 }
];

const treks = [
    { name: 'Mountain Trek', difficulty: 'Moderate', duration: 5 },
    { name: 'Forest Trail', difficulty: 'Easy', duration: 3 }
];

const payments = [
    { customer: 'John Doe', trek: 'Mountain Trek', date: '2024-05-12', amount: 500 },
    { customer: 'Jane Smith', trek: 'Forest Trail', date: '2024-06-01', amount: 300 }
];

// Load dashboard data
document.addEventListener('DOMContentLoaded', function() {
    loadOverview();
    loadCustomers();
    loadTreks();
    loadPayments();
});

// Overview section
function loadOverview() {
    document.getElementById('totalTreks').textContent = treks.length;
    document.getElementById('totalCustomers').textContent = customers.length;
    document.getElementById('totalRevenue').textContent = `$${payments.reduce((total, payment) => total + payment.amount, 0)}`;
}

// Customer Management
function loadCustomers() {
    const customerTable = document.getElementById('customerTable').getElementsByTagName('tbody')[0];
    customers.forEach(customer => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${customer.name}</td><td>${customer.email}</td><td>${customer.trek}</td><td>$${customer.paid}</td>`;
        customerTable.appendChild(row);
    });
}

// Trek Management
document.getElementById('addTrekForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const trekName = document.getElementById('trekName').value;
    const difficulty = document.getElementById('difficulty').value;
    const duration = document.getElementById('duration').value;
    treks.push({ name: trekName, difficulty: difficulty, duration: parseInt(duration) });
    loadTreks();
    this.reset();
});

function loadTreks() {
    const trekList = document.getElementById('trekList');
    trekList.innerHTML = '';
    treks.forEach(trek => {
        const trekItem = document.createElement('li');
        trekItem.textContent = `${trek.name} - Difficulty: ${trek.difficulty}, Duration: ${trek.duration} days`;
        trekList.appendChild(trekItem);
    });
}

// Payment Overview
function loadPayments() {
    const paymentTable = document.getElementById('paymentTable').getElementsByTagName('tbody')[0];
    payments.forEach(payment => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${payment.customer}</td><td>${payment.trek}</td><td>${payment.date}</td><td>$${payment.amount}</td>`;
        paymentTable.appendChild(row);
    });
}
