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