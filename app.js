var slideIndex = 1; //set slide 
showSlides(slideIndex); // panggil function showslide(n)

function plusSlides(n) { 
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i; // set i
  var slides = document.getElementsByClassName("mySlides"); //mengambil id (myslide)
  if (n > slides.length)  // apakaha n > jumlah slide
    {
      slideIndex = 1 // jika iya maka index slide = 1
    }    
  if (n < 1) { // apakaha n < jumlah slide
    slideIndex = slides.length // jika iya maka index slide = jumlah slide
  }
  for (i = 0; i < slides.length; i++) { //loping i untuk slide
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  //menampikan slide id ke [aray]
}