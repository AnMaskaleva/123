const slides2 = document.querySelectorAll('.i-need'),
    prev2 = document.querySelector('.tc-button-prev'),
    next2 = document.querySelector('.tc-button-next');
let slideIndex2 = 1;

function showSlides2(n){
    if (n > slides2.lenght){
        slideIndex2 = 1;
    }
    if (n < 1){
        slideIndex2 = slides2.lenght;
    }
    slides2.forEach(item => item.style.display = "none");
    slides2[slideIndex2 - 1].style.display = "block";
}
showSlides2(slideIndex2);

function plusSlide2(n){
    showSlides2(slideIndex2 += n);
}
next2.addEventListener('click',()=>{
    plusSlide2(1);
})
prev2.addEventListener('click',()=>{
    plusSlide2(-1)
})