document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // You can add more validation logic here if needed
        alert('Form submitted successfully!');
        form.reset();
    });
});
