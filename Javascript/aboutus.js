// Toggle menu for mobile view
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.sticky-header nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Animate stats on scroll with smooth number incrementation
const stats = document.querySelectorAll('.stat-item');
const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statItem = entry.target;
            const count = statItem.dataset.count;
            const targetNumber = parseInt(count.replace('+', ''));
            const duration = 5000; // 5 seconds for animation
            const interval = 50; // Time interval between each increment
            let currentNumber = 0;

            // Custom logic for incrementing the "Satisfied Customers" stat
            if (statItem.classList.contains('customers')) {
                let increment = 7000;
                const intervalTime = Math.floor(duration / (100000 / increment));
                
                const customerInterval = setInterval(() => {
                    currentNumber += increment;
                    if (currentNumber >= 100000) {
                        currentNumber = 100000;
                        clearInterval(customerInterval); // Stop at 100,000
                    }
                    statItem.querySelector('h3').innerText = currentNumber.toLocaleString();
                }, intervalTime);

            } else {
                // General case for other stats (e.g., designs)
                const incrementInterval = Math.floor(duration / targetNumber);
                const generalInterval = setInterval(() => {
                    currentNumber++;
                    statItem.querySelector('h3').innerText = currentNumber + (count.includes('+') ? '+' : '');
                    if (currentNumber === targetNumber) clearInterval(generalInterval);
                }, incrementInterval);
            }

            observer.unobserve(statItem);
        }
    });
}, { threshold: 0.5 });

stats.forEach(stat => statsObserver.observe(stat));
