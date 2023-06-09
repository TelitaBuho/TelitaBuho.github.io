window.onscroll = function() {

    var posicionFixeds = window.pageYOffset || document.documentElement.scrollTop;
    var fondoGlow = document.getElementById("FondoPaginaWeb");
    var fondoImagen = document.getElementById("FondoPaginaWebImagen");

    posicionFixeds *= -1; 
    fondoGlow.style.top = posicionFixeds * 0.1 + "px";
    fondoImagen.style.top = 0;

}