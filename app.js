document.addEventListener('DOMContentLoaded', () => {
    const takeNumberButton = document.getElementById('takeNumber');
    const callNextButton = document.getElementById('callNext');
    const queueNumberElement = document.getElementById('queueNumber');
    const estimatedTimeElement = document.getElementById('estimatedTime');
    const queueList = document.getElementById('queueList');

    let queue = [];
    let currentNumber = 0;

    takeNumberButton.addEventListener('click', () => {
        const number = queue.length + 1;
        queue.push({ number, status: 'waiting' });
        queueNumberElement.textContent = number;
        estimatedTimeElement.textContent = `${queue.length * 5} minutes`;
        document.getElementById('homepage').style.display = 'none';
        document.getElementById('customerView').style.display = 'block';
    });

    callNextButton.addEventListener('click', () => {
        if (queue.length > 0) {
            const nextCustomer = queue.shift();
            alert(`Calling customer number ${nextCustomer.number}`);
            renderQueue();
        } else {
            alert('No customers in the queue.');
        }
    });

    function renderQueue() {
        queueList.innerHTML = '';
        queue.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `Number ${item.number} - ${item.status}`;
            queueList.appendChild(li);
        });
    }

    // For demo purposes, show the admin view
    document.getElementById('adminView').style.display = 'block';
});
