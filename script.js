let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let texts = document.getElementsByClassName("text");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (let i = 0; i < texts.length; i++) {
        texts[i].style.display = "none";  
    }

    slides[slideIndex-1].style.display = "block";  
    texts[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); 
}