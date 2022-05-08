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

const search = () =>{
    const searchbox = document.getElementsByClassName("search-area").value.toUpperCase();
    const storeitems = document. getElementById("navigation")
    const product = document.querySelectorAll("catbox")
    const pname = document.getElementsByTagName("alt")
    for(var i=0; i < alert.length; i++){
        let match =product[i].getElementsByTagName('alt')[0];
        if(match){
            let textvalue = match.textContent || match.innerHTML
            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].getElementsByClassName.display = "";
            }
            else{
                product[i].getElementsByClassName.display = "none";
            }

        }
    }

}