var header = 0;
function scrollHead(){
    
    if ($(document).scrollTop() > 0) {
        if (header == 0) {
            header = 1;
            $('.header').addClass('slim-header');
        }
    } else {
        if (header == 1) {
            header = 0;
            $('.header').removeClass('slim-header');
        }
    }
}
scrollHead();

$(window).scroll( scrollHead)