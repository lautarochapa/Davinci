

function updateBranches(){
    axios.get("/branches")
    .then((resp)=> data.branches = resp.data)
    .catch((err)=>
        console.error(err.response.data)
    )

}

function deleteRamal(branch){
    axios.delete("/branches/" + branch.id)
        .then((resp)=>updateBranches())
        .catch((err)=>
            console.error(err.response.data)
        )
}

function CrearRamales(){
    console.log("Tabla Ramales Creado")
    body = document.getElementById("body")
    while (body.hasChildNodes()) {   
        body.removeChild(body.firstChild);
    }
    crearNav()
    CrearTable("Ramales", "Nombre", "Horario", "Editar", "Nuevo", "{{ branch.name }}", "{{ branch.starts_at}} - {{branch.finish_at}}", "Editar", "Borrar", "branches", "branch in branches")
    ActualizarLinks()

    var branches = new Vue({
        el: '#branches',
        data: data,
        methods:{
            agregarRamal : agregarRamal
        }
    })

}


