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

document.addEventListener("DOMContentLoaded", function () {
    // Create overlay element
    const overlay = document.createElement("div");
    overlay.classList.add("image-popup-overlay");
    overlay.innerHTML = `<img src="" alt="Popup Image">`;
    document.body.appendChild(overlay);
    
    const popupImage = overlay.querySelector("img");

    // Click any image to enlarge it
    document.addEventListener("click", function (e) {
        if (e.target.tagName === "IMG" && !e.target.closest(".image-popup-overlay")) {
            popupImage.src = e.target.src; // Set image source
            overlay.classList.add("show");
        }
    });

    // Click outside the image to close popup
    overlay.addEventListener("click", function () {
        overlay.classList.remove("show");
    });
});
// Select all images on the page
document.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", function () {
        let popup = document.getElementById("imagePopup");
        let popupImg = document.getElementById("popupImg");
        
        // Ensure this.src is valid before setting it
        if (this.src) {
            popupImg.src = this.src; 
            popup.classList.add("active");
        } else {
            console.error("Image source is missing or broken!");
        }
    });
});

// Function to close the popup
function closePopup() {
    document.getElementById("imagePopup").classList.remove("active");
}

document.addEventListener("click", function (e) {
    const popup = document.getElementById("imagePopup");
    const popupImg = document.getElementById("popupImg");

    // If the popup is open AND the click is not on the image or close button → close the popup
    if (popup.style.display === "block" && !popupImg.contains(e.target)) {
        closePopup();
    }
});