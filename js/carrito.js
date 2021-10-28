let listaObjetos;
let imprimirDatos = document.getElementById("productosPrint");
let btnFinalizar = document.getElementById("btnFinalizar");
let mensaje = document.getElementById("mensaje");

listar();

function listar() {
    imprimirDatos.innerHTML = '';
    
    if (localStorage.getItem("carrito")) {
        listaObjetos = JSON.parse(localStorage.getItem("carrito"));
        btnFinalizar.style.display = 'block';
    } else {
        listaObjetos = [];
        btnFinalizar.style.display = 'none';
        mensaje.innerHTML = `<p>El carrito esta vacio.</p>
        <p> por favor ingresá <a href="sabores.html">acá</a> y elegilos</p>`;
    }

    listaObjetos.forEach(element => {
        imprimirDatos.innerHTML +=
            `<div class="columna columna33">
                <img src="${element.img}" alt="" class="sabores__img">
                <h3 class="sabores__title">${element.sabor}</h3>
                <p class="sabores__txt">${element.categoria}</p>
            </div>`
    });
}

function finalizarCompra() {
    let monto = 0

    listaObjetos.forEach(e => {
        monto += e.precio
    })
    //console.log("compra finalizada, gastate" + monto);
    localStorage.removeItem("carrito");
    listar();
    mensaje.innerHTML = `<p>Muchas gracias por tu compra, el total es: $ ${monto}</p>`;

}
