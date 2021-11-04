let listaObjetos;
let imprimirDatos = $("#productosPrint");
let btnFinalizar = $("#btnFinalizar");
let mensaje = $("#mensaje");
let carritoVacio = $("#carritoVacio")
let limpiar = $('#btnLimpiar')
let compra = $('#compra')


listar();
mensajes();
function mensajes(){
    if (localStorage.getItem("carrito")) { 
        btnFinalizar.show();
        mensaje.show();
        carritoVacio.hide();
        limpiar.show();
    } else {     
        btnFinalizar.hide();
        mensaje.hide();
        carritoVacio.show();
        limpiar.hide();

    }  
}


function listar() {
    imprimirDatos.empty()

    if (localStorage.getItem("carrito")) {
        listaObjetos = JSON.parse(localStorage.getItem("carrito"));
        
    } else {
        listaObjetos = [];
        

    }
    listaObjetos.forEach((element) => {
        imprimirDatos.append(`
            <div class="columna columna33">
                <img src="${element.img}" alt="" class="sabores__img">
                <h3 class="sabores__title">${element.sabor}</h3>
                <p class="sabores__txt">${element.categoria}</p>
            </div>`)
    });

}

function finalizarCompra() {
    let monto = 0;

    listaObjetos.forEach(() => {
        monto += 300;
    })
    console.log("compra finalizada, gastaste" + monto);
    localStorage.removeItem("carrito");
    mensaje.hide()
    compra.append(`<p>Muchas gracias por tu compra, el total es: $ ${monto}</p>`);
    listar();
}
function limpiarCarrito() {

    localStorage.removeItem("carrito")
    mensajes()
    listar()

}

