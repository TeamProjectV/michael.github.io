var checker;

function myalert(){

let checker= prompt("How Many Items Do You Need ?");

if (checker!= null){
  
alert('Items Added Successfully..')}
  
else{
    alert('Process Cancelled..')
}

}


function myFunction() {
    
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {

    if (!event.target.matches('.dropbtn')) {

      var dropdowns = document.getElementsByClassName("dropdown-content");

      var i;

      for (i = 0; i < dropdowns.length; i++) {

        var openDropdown = dropdowns[i];

        if (openDropdown.classList.contains('show')) {

          openDropdown.classList.remove('show');

        }
      }
    }
  }
