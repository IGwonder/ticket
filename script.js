let currentTicketNumber = 0;

document.getElementById('get-ticket').addEventListener('click', () => {
    currentTicketNumber++;
    document.getElementById('ticket-number').innerText = `Ditt nummer: ${currentTicketNumber}`;
});

// Generate QR code with a library like qrious (not included in this basic example)
// You can include qrious or another QR code generation library to dynamically generate QR codes
