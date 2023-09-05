var imagenes = [
    "https://wowslider.com/sliders/demo-5/data/images/sweden.jpg",
    "https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg",
    "https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg",
    "https://wowslider.com/sliders/demo-5/data/images/sur.jpg",
]
var contador = 0;
document.getElementById("imagen").src = imagenes[0];

var sliderDerecha = document.querySelector(".slider-derecha");
var sliderIzquierda = document.querySelector(".slider-izquierda");
function MoverDerecha() {
    contador++;
    if (contador > (imagenes.length-1)) {
        contador = 0;
    }
    document.getElementById("imagen").src = imagenes[contador];
}
var intervalo = setInterval(MoverDerecha, 3000);
sliderDerecha.addEventListener("click", function()
    {
        clearInterval(intervalo);
        MoverDerecha();
        intervalo = setInterval(MoverDerecha, 3000);
    });
function MoverIzquierda() {
    contador--;
    if (contador < 0) {
        contador = imagenes.length - 1;
    }
    document.getElementById("imagen").src = imagenes[contador];
}
sliderIzquierda.addEventListener("click", function() {
    clearInterval(intervalo);
    MoverIzquierda();
    intervalo = setInterval(MoverDerecha, 3000); 
});
