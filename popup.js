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