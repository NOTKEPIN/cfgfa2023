let slideIndexOne = 1;
    let slideIndexTwo = 1;

    showSlidesOne(slideIndexOne);
    showSlidesTwo(slideIndexTwo);

    function showSlidesOne(index) {
        const slides = document.querySelectorAll('.carousel-one-item');
        if (index < 1) {
            slideIndexOne = slides.length;
        }
        if (index > slides.length) {
            slideIndexOne = 1;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[slideIndexOne - 1].style.display = 'block';
    }

    function showSlidesTwo(index) {
        const slides = document.querySelectorAll('.carousel-two-item');
        if (index < 1) {
            slideIndexTwo = slides.length;
        }
        if (index > slides.length) {
            slideIndexTwo = 1;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[slideIndexTwo - 1].style.display = 'block';
    }

    function changeSlideOne(n) {
        showSlidesOne((slideIndexOne += n));
    }

    function changeSlideTwo(n) {
        showSlidesTwo((slideIndexTwo += n));
    }

    document.querySelector(".carousel-container-one .back").addEventListener("click", function () {
        changeSlideOne(-1);
    });

    document.querySelector(".carousel-container-one .forward").addEventListener("click", function () {
        changeSlideOne(1);
    });

    document.querySelector(".carousel-container-two .prev").addEventListener("click", function () {
        changeSlideTwo(-1);
    });

    document.querySelector(".carousel-container-two .next").addEventListener("click", function () {
        changeSlideTwo(1);
    });

    let slideIndex = 1;
    showSlides(slideIndex);
    
    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    } 