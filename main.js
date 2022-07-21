


let deporte = (tipo, pago, capacidad, precio)

function deporte (tipo, pago, capacidad){
    this.tipo = tipo;
    this.pago = pago;
    this.capacidad = capacidad;
    this.precio = precio;
}

const padelWorld = new deporte ("padel", "alquiler", 4, 3000);
const siempre10 = new deporte ("futbol", "alquiler", 22, 5000);
const colzenneger = new deporte ("gimnasio", "membresia", 8500);
const crossfit = new deporte ("gimnasio", "membresia", 30, 4600);
const tenisRapidas = new deporte ("tenis", "alquiler", 4, 5500);
const palace = new deporte ("tenis", "alquiler", 4, 6000)


function carrito (){
    let valorCarrito = 0;
    let carrito = [];
    const sumaCarrito = carrito.reduce((valorCarrito, carrito) => valorCarrito = carrito, 0)
}
