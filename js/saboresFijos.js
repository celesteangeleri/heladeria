const URLGET = 'http://localhost:3000';
//si localStorage esta vacio
if (localStorage.getItem("lista") == null) {
    //hace llamada a AJAX
    $.get(URLGET, (respuesta, estado) => {
        //si el estado es success
        if (estado === 'success') {
            //guardo la respuesta del AJAX en el localStorage
            localStorage.setItem("lista", JSON.stringify(respuesta))
        }
    })
}
