// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
const form = document.querySelector('.form1');
const nameInput = document.getElementById('text');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('number');
const thoughtInput = document.getElementById('thought');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (nameInput.value.trim() === '') {
        alert('Please enter your name');
        isValid = false;
    }

    if (!emailPattern.test(emailInput.value.trim())) {
        alert('Please enter a valid email address');
        isValid = false;
    }

    if (phoneInput.value.trim().length < 10 || isNaN(phoneInput.value.trim())) {
        alert('Please enter a valid phone number');
        isValid = false;
    }

    if (thoughtInput.value.trim() === '') {
        alert('Please share your thoughts');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        form.reset(); // Reset form after successful submission
    }
});

// Button click interaction effect
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function () {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
    });
});


code AudioListener.getelementbyid(banner);
function hover{
    banner.addEventListener(thoughtInput);
}