document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Ensure the menu is collapsed when the page loads (for smaller screens)
    if (navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }

    // Add event listener for hamburger toggle button
    if (navToggle) {
        navToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    } else {
        console.error("Error: nav-toggle button not found.");
    }

    // Add event listeners to close the menu when any link is clicked
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Close the menu when a link is clicked
            if (navLinks) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Optional: Ensure menu is closed when page is loaded (in case it's open after navigation)
    // This is important for single-page navigation
    if (window.location.pathname !== '/index.html') {
        if (navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    }
});
