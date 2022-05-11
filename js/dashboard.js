
function darkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    document.getElementById("bargraph").src= "images/mostselled_black.png" ;
    document.getElementById("piechart").src= "images/piechart_black.png" ;
    document.getElementById("themebtn").className=  "fa-solid fa-toggle-on";
  } 
  else {
    document.getElementById("bargraph").src= "images/mostselled.png" ;
    document.getElementById("piechart").src= "images/piechart.png" ;
    document.getElementById("themebtn").className=  "fa-solid fa-toggle-off";
  }
  
}
