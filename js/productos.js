let listaObjetos = [];
let imprimirDatos = $("#productosPrint");


if (localStorage.getItem("lista") == null) {
   
} else {
    listaObjetos = JSON.parse(localStorage.getItem("lista"))
}

//imprime las tarjetas de los sabores//
listaObjetos.forEach((element, index) => {
    imprimirDatos.append(`
    <div class="columna columna33">
         <img src="${element.img}" alt="" class="sabores__img">
        <h3 class="sabores__title">${element.sabor}</h3>
        <p class="sabores__txt">${element.categoria}</p>
        <p class="sabores__precio">$300</p>
         <button id="btnCarrito" class="sabores__boton" onclick="comprar(${index})">comprar</button>
    </div>    
    
    `)
});

//funcion paara comprar//

const comprar = (index) => {
    let carrito;

    if (localStorage.getItem("carrito") == null) {
        carrito = []

    } else {
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }
    carrito.push(listaObjetos[index])

    localStorage.setItem("carrito", JSON.stringify(carrito))



}
/*<div class="columna columna33">
                    <img src="imagenes/frutilla.png" alt="" class="sabores__img">
                    <h3 class="sabores__title">Frutilla</h3>
                    <p class="sabores__txt">Lorem ipsum dolor, sit amet consectetur.</p>
                    <button id="btnCarrito" class="sabores__precio">$9.00</button>
                </div>*/