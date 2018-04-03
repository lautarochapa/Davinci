
function updateStops(){
    axios.get("/stops")
        .then((resp)=> data.stops = resp.data)
        .catch((err)=>
            console.error(err.response.data)
        )
    }
    

    

    

function CrearParadas(){
    console.log("Tabla Paradas Creado")
    body = document.getElementById("body")
    while (body.hasChildNodes()) {   
        body.removeChild(body.firstChild);
    }
    crearNav()
    CrearTable("Paradas", "Nombre", "Ramal", "Editar", "Nuevo", "{{ stop.name }}", "{{ stop.id_branch }}", "Editar", "Borrar", "stops", "stop in stops")
    ActualizarLinks()

    var stops = new Vue({
        el: '#stops',
        data: data
    })
}
