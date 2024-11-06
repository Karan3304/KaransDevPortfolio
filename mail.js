document.addEventListener('DOMContentLoaded', function() {
    // Ensure the scrollButton element exists
    var scrollButton = document.getElementById('scrollButton');
    if (scrollButton) {
        scrollButton.onclick = function() {
            document.getElementById('section2').scrollIntoView({ behavior: 'smooth' });
        };
    } else {
        console.error('scrollButton element not found');
    }

    var DownToTop = document.getElementById('DownToTop');
    if (DownToTop) {
        DownToTop.onclick = function() {
            document.getElementById('section1').scrollIntoView({ behavior: 'smooth' });
        };
    } else {
        console.error('DownToTop element not found');
    }
    var DownToTop = document.getElementById('about-button');
    if (DownToTop) {
        DownToTop.onclick = function() {
            document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
        };
    } else {
        console.error('DownToTop element not found');
    }

    // Ensure the contact form exists
    var contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            emailjs.sendForm('service_bny4y8j', 'template_49qfx8h', this)
                .then(function() {
                    alert('Email sent successfully!');
                }, function(error) {
                    alert('Failed to send email. Error: ' + JSON.stringify(error));
                });
        });
    } else {
        console.error('Contact form element not found');
    }
});
