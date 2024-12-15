

  document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.hero-carousel');
    const images = carousel.querySelectorAll('img');
    const dots = document.querySelectorAll('.dot');
    const totalImages = images.length;
    let activeIndex = 0;  // Index of the currently active image

    // Function to scroll the carousel to a specific image
    function scrollToImage(index) {
        carousel.style.transform = `translateX(-${index * 100}vw)`;  // Scroll to the corresponding image
        updateActiveDot(index);
    }

    // Function to update the active dot
    function updateActiveDot(index) {
        dots.forEach(dot => dot.classList.remove('active'));  // Remove active class from all dots
        dots[index].classList.add('active');  // Add active class to the current dot
    }

    // Click event listener for dot navigation
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'));
            scrollToImage(index);
            activeIndex = index;  // Update the active image index
        });
    });

    // Auto-scroll functionality with continuous looping
    function autoScroll() {
        activeIndex = (activeIndex + 1) % totalImages;  // Loop back to the first image after the last
        scrollToImage(activeIndex);
    }

    // Set the interval for automatic scrolling every 3 seconds
    setInterval(autoScroll, 3000);  

    // Initialize the first image as active
    updateActiveDot(activeIndex);
});

document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission to validate the email first

    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value;
    
    // Regular expression for basic email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(emailValue)) {
        // If the email is valid, allow form submission
        alert('Email is valid! Submitting form...');
        this.submit();  // Proceed with form submission
    } else {
        // If the email is invalid, show an error message
        alert('Please enter a valid email address.');
        emailInput.focus();  // Focus on the email input to prompt the user to correct it
    }
});

