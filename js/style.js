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