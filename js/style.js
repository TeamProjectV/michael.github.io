$(document).ready(function(){
    $('.bxslider').bxSlider({
        mode : 'horizontal',
        Auto: true,

  });

$('. menu-togglr').on('click',function(){
    $('#mainav').slidetoggle('fast');
    $(this).toggleclass('active');
});
});
function myfunction(){
    alert("item added successfully");
}
var content = document.getElementsByTagName('body')[0];
        var darkMode = document.getElementById('dark-change');
        darkMode.addEventListener('click', function(){
            darkMode.classList.toggle('active');
            content.classList.toggle('night');
        })