// entidad para igresar al backoffice//
class User {

    constructor(nombre, pass) {
        this.nombre = nombre;
        this.pass = pass
    }
}

// entidad para crear productos//
class Producto {

    constructor(sabor, categoria, precio, stock,img) {
        this.sabor = sabor;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
    }

}

//usuario permitido para ingresar al backoffice//
const celeste = new User("celeste", "1234")

let listaProductos;
//si la lista no tiene informacion la declara vacia//
if (localStorage.getItem("lista") == null) {
    listaProductos = []
     //si la lista si tiene informacion, nos muestra los productos//
} else {
    listaProductos = JSON.parse(localStorage.getItem("lista"))
}



//funcion factory para crear productos//
const crearProducto = (sabor, categoria, precio, stock,img) => {
    const producto = new Producto(sabor, categoria, precio, stock,img)
    return producto
}

//funcion para ingresar al backoffice//
const confirmacionDeAcceso = () => {

    let bucle = true

    while (bucle) {

        const nombre = prompt("Ingresa tu nombre");
        const pass = prompt("Ingresa tu pass")
//si puede ingresar, puede crear productos//
        if (nombre === celeste.nombre && pass === celeste.pass) {
            bucle = false

            let ciclo = true;
//si es true podeamos crear productos//
            while (ciclo) {
 //crea un objeto//
                const sabor = prompt("ingrese nombre del producto");
                const categoria = prompt("ingrese categoria del producto");
                const precio = Number(prompt("ingrese precio del producto"));
                const stock = parseInt(prompt("Ingrese la cantidad de productos"));
                const img = prompt("ingrese ruta de imagen del producto")
 //agrega a lista de productos //
                listaProductos.push(crearProducto(sabor, categoria, precio, stock,img))
 //pushea y pasa mis productos agregados a JSON//
                localStorage.setItem("lista", JSON.stringify(listaProductos))

                ciclo = confirm("Deseas agregar otro mas?")
            }
            break;
                 //si no puede ingresar pide datos nuevamente//
        } else {
            alert("USUARIO INCORRECTO");
        }
    }
}

confirmacionDeAcceso()






