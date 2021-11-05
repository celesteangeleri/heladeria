// entidad para crear productos//
class Producto {
    constructor(sabor, categoria,precio, stock, img) {
        this.sabor = sabor;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
    }
}

//si la lista no tiene informacion la declara vacia//
let listaProductos = [];
setTimeout(init, 100);

function init() {
    if (localStorage.getItem("lista") !== null) {
        //si la lista si tiene informacion, nos muestra los productos//
        listaProductos = JSON.parse(localStorage.getItem("lista"))
    }
}


//funcion factory para crear productos//
const crearProducto = (sabor, categoria, precio, stock, img) => {
    const producto = new Producto(sabor, categoria, precio, stock, img)
    return producto
}


//crea un objeto//
function crear() {
    const sabor = document.getElementById("sabor").value;
    const categoria = document.getElementById("categoria").value;
    const stock = parseInt(document.getElementById("stock").value);
    const img = document.getElementById("img").value

    //agrega a lista de productos //
    listaProductos.push(crearProducto(sabor, categoria,precio, stock, img))

    //pushea y pasa mis productos agregados a JSON//
    localStorage.setItem("lista", JSON.stringify(listaProductos))
}
























/*
//////////////////////Formulario //////////////////////////////////////

function obtenerDatos(){
    let nombre = document.getElementById('nombre')
    let correo = document.getElementById('correo')
    let telefono = parseFloat(document.getElementById('telefono'));
    let mensaje = document.getElementById('mensaje')

    document.registro.nombreObtenido.value = nombre;
    document.registro.correoObtenido.value = correo;
    document.registro.telefonoObtenido.value = telefono;
   console.log( document.registro.mensajeObtenido.value = mensaje)
}
*/


