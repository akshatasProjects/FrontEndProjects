const imgSlides = document.querySelectorAll('.img-slides img');
let slideIndex = 0;
let intervalId = null;


// initializeSlider();
document.addEventListener('DOMContentLoaded', initializeSlider)


function initializeSlider(){
    if(imgSlides.length > 0){
        imgSlides[slideIndex].classList.add('displaySlide');
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index){

    if(index >= imgSlides.length){
        slideIndex = 0;
    } else if(index < 0) {
        slideIndex = imgSlides.length - 1;
    }

    imgSlides.forEach(slide => {
        slide.classList.remove('displaySlide');
    });
    imgSlides[slideIndex].classList.add('displaySlide');
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

