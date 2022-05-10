var slide = new Array(
    
    "https://picsum.photos/600/400?random=2", 
"https://picsum.photos/600/400?random=3",
 "https://picsum.photos/600/400?random=4", 
 "https://picsum.photos/600/400?random=5");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}