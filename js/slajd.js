const slides = document.querySelectorAll('.i-need-2'),
    prev = document.querySelector('.need-button-prev'),
    next = document.querySelector('.need-button-next');
let slideIndex = 1;

function showSlides(n){
    if (n > slides.lenght){
        slideIndex = 1;
    }
    if (n < 1){
        slideIndex = slides.lenght;
    }
    slides.forEach(item => item.style.display = "none");
    slides[slideIndex - 1].style.display = "block";
}
showSlides(slideIndex);

function plusSlide(n){
    showSlides(slideIndex += n);
}
next.addEventListener('click',()=>{
    plusSlide(1);
})
prev.addEventListener('click',()=>{
    plusSlide(-1)
})