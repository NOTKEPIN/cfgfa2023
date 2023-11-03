let slideIndex = 1;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index < 1) slideIndex = slides.length;
    if (index > slides.length) slideIndex = 1;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

function changeSlide(n) {
    showSlide((slideIndex += n));
}

showSlide(slideIndex);