
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


const botonColzeneger = document.querySelector("#colz")

botonColzeneger.addEventListener('click', function(){
	Swal.fire({
        title: 'Colzenneger Gym',
        text: 'Cuotas trimestrales de 7500 pesos. Ubicado a tres cuadras de la terminal.',
        confirmButtonText: 'Agregar al Carrito'
    })
});

const botonSiempre = document.querySelector("#siemp")

botonSiempre.addEventListener('click', function(){
	Swal.fire({
        title: 'Siempre al 10',
        text: 'LLama por telefono y consulta horarios, precio y disponibilidad del bar.',
        confirmButtonText: 'Agregar al Carrito'
    })
});

const botonXGym = document.querySelector("#xgym")

botonXGym.addEventListener('click', function(){
	Swal.fire({
        title: 'X gym',
        text: 'Elegi tu forma d epago, mensual trimestral o semestral, y consegui descuentos increibles.',
        confirmButtonText: 'Agregar al Carrito'
    })
});

const botonPade = document.querySelector("#pade")

botonPade.addEventListener('click', function(){
	Swal.fire({
        title: 'Padel World',
        text: '1200 la hora, consulta nuestro schedule de torneos y anotate en el que se ajuste a tu nivel.',
        confirmButtonText: 'Agregar al Carrito'
    })
});

const botonSpor = document.querySelector("#spor")

botonSpor.addEventListener('click', function(){
	Swal.fire({
        title: 'Sport Palace',
        text: '800 la hora, amplia cantidad de canchas, no dudes en consultar horarios, se pueden pedir horarios fijos.',
        confirmButtonText: 'Agregar al Carrito'
    })
});

const botonRaps = document.querySelector("#raps")

botonRaps.addEventListener('click', function(){
	Swal.fire({
        title: 'Tenis Rapidas',
        text: '1400 la hora, clases durante los dias de semana, profesorado de tenis y padel todas las mananas.',
        confirmButtonText: 'Agregar al Carrito'
    })
});