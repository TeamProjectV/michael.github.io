function myFunction() {
    var element = document.body;
    element.classList.toggle("theme");
}
function cardspace(){
    var carddigit = document.getElementById('cardno').ariaValueMax;
    if(carddigit.length ==4 || carddigit.length == 9 || carddigit.length == 14){
        document.getElementById('cardno').value = carddigit+" ";
        document.getElementById('cardno').max = 1;
    }
}
