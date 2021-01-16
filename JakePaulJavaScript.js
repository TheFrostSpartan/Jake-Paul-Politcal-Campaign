/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  } 

  function togglePillar1() {
    var text = document.getElementById("pillar1");
    var text2 = document.getElementById("pillar1Alt");
    if (text.style.display == "none") {
      text.style.display = "block";
      text2.style.display = "none";
    } else {
      text.style.display = "none";
      text2.style.display = "flex";
    }
  }

  function togglePillar2() {
    var text = document.getElementById("pillar2");
    var text2 = document.getElementById("pillar2Alt");
    if (text.style.display == "none") {
      text.style.display = "block";
      text2.style.display = "none";
    } else {
      text.style.display = "none";
      text2.style.display = "flex";
    }
  }

  function togglePillar3() {
    var text = document.getElementById("pillar3");
    var text2 = document.getElementById("pillar3Alt");
    if (text.style.display == "none") {
      text.style.display = "block";
      text2.style.display = "none";
    } else {
      text.style.display = "none";
      text2.style.display = "flex";
    }
  }

  var slideIndex = 1;
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
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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