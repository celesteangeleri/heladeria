//-----menu-----//

let btnmenu = document.getElementById('btnmenu');
let menu = document.getElementById('menu');
btnmenu.addEventListener('click', function () {
    'use strict';
    menu.classList.toggle('mostrar');
})


////////////////////////////////////////-----carrusel---///////////////////////////////////////////////////////////////////
$(document).ready(function () {
    var imgItems = $('.slider li').length; // Numero de Slides
    var imgPos = 1;


    //------------------------

    $('.slider li').hide(); // Ocultanos todos los slides
    $('.slider li:first').show(); // Mostramos el primer slide


    // Ejecutamos todas las funciones

    $('.right span').click(nextSlider);
    $('.left span').click(prevSlider);


    setInterval(function () {
        nextSlider();
    }, 7000);

    // FUNCIONES =========================================================

    function nextSlider() {
        if (imgPos >= imgItems) { imgPos = 1; }
        else { imgPos++; }

        $('.slider li').hide(); // Ocultamos todos los slides
        $('.slider li:nth-child(' + imgPos + ')').fadeIn(); // Mostramos el Slide seleccionado

    }

    function prevSlider() {
        if (imgPos <= 1) { imgPos = imgItems; }
        else { imgPos--; }

        $('.slider li').hide(); // Ocultamos todos los slides
        $('.slider li:nth-child(' + imgPos + ')').fadeIn(); // Mostramos el Slide seleccionado
    }

});