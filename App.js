// App.js
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav__link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const pageUrl = this.getAttribute('href');
            document.getElementById('content-frame').src = pageUrl;
        });
    });
});
