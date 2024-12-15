// Get the form element
const contactForm = document.querySelector('.contact-form');

// Add event listener for form submission
contactForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Get form values
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#message').value.trim();

  // Validate form inputs
  if (!name || !email || !message) {
    alert('Please fill out all fields before submitting.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Simulate form submission (e.g., you can replace this with an API call)
  alert('Thank you for contacting us! Your message has been successfully submitted.');

  // Clear the form
  contactForm.reset();
});

// Email validation function
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
