let slideIndex = 1;
showSlides(slideIndex);

// Function to change slides on button click
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Main function to show the current slide
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    
    // Prevent looping: If the slideIndex is greater than the number of slides, show the last slide.
    if (n > slides.length) {
        slideIndex = slides.length;
    }

    // Prevent looping: If the slideIndex is less than 1, show the first slide.
    if (n < 1) {
        slideIndex = 1;
    }

    // Hide all slides initially
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";  
}

