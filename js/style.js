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
function message(){
    var name = document.getElementById('name');
    var email=document.getElementById('email');
    var age = document.getElementById('age');
    var phone =document.getElementById('phone');
    var msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');
    if(name.value === '' || email.value === '' || age.value ===''||  phone.value ===''|| msg.value ===''){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            name.value ='';
            email.value ='';
            age.value ='';
            phone.value ='';
            msg.value ='';
        }, 2000);
        success.style.display = 'block';
    }


    setTimeout(() => {

    danger.style.display = 'none';
    success.style.display = 'none';
}, 4000);


}