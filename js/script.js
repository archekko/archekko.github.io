const hamburger = document.querySelector('.hamburger'),
menu = document.querySelector('.menu'),
closeElem = document.querySelector('.menu__close');
let menuItem = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuItem.forEach(function(item){
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

const percent = document.querySelectorAll('.skils__grade-percent'),
lines = document.querySelectorAll('.skils__grade-divider span');

percent.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function(){
        $(this).find("input").value("");

        $('form').trigger('reset');
    });
    return false;
});

