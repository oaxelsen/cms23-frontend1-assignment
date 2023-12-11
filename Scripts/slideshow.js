let slideIndex = 0;

showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slide');

    // Gömmer alla bilder
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Ökar slideIndex med 1 bild och startar om när slideIndex når max antalet bilder i bildspelet
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Visar nuvarande bild
    slides[slideIndex - 1].classList.add('active');

    // Ändrar bild varje 5 sekunder
    setTimeout(showSlides, 5000);
}
