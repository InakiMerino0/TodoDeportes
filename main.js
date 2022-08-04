
class Deporte {
    constructor(tipo, pago, capacidad, precio) {
        this.tipo = tipo;
        this.pago = pago;
        this.capacidad = capacidad;
        this.precio = precio;
    }
}
const padelWorld = new Deporte ("padel", "alquiler", 4, 3000);
const siempre10 = new Deporte ("futbol", "alquiler", 22, 5000);
const colzenneger = new Deporte ("gimnasio", "membresia", 8500);
const crossfit = new Deporte ("gimnasio", "membresia", 30, 4600);
const tenisRapidas = new Deporte ("tenis", "alquiler", 4, 5500);
const palace = new Deporte ("tenis", "alquiler", 4, 6000)

let productos = [padelWorld,siempre10,colzenneger,crossfit,tenisRapidas,palace]


let valorCarrito = 0;
let carrito = [];
function carritoAgregado (){
    const sumaCarrito = carrito.reduce((valorCarrito, carrito) => valorCarrito = carrito, 0)
}

const prodAgregado = document.querySelector(".btn")

prodAgregado.addEventListener("click",clickCarrito);

function clickCarrito (){
    let precioProducto = (productos[4].precio);
    valorCarrito = valorCarrito + precioProducto;
    carrito.push(prodAgregado); 
}
