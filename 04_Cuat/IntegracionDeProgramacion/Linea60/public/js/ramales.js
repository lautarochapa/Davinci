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


function agregarRamal(name){
    axios.post("/branches/",{name:name})
        .then((resp)=>{
           updateBranches();
            data.nuevoRamal = "";   
        })
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
    CreateTableBranches("Ramales", "Nombre", "Horario", "Editar", "Nuevo", "{{ branch.name }}", "{{ branch.starts_at}} - {{branch.finish_at}}", "Editar", "Borrar", "branches", "branch in branches")
    crearModalNuevo("ModalCrearRamales")
    ActualizarLinks()

    new Vue({
        el: '#branches',
        data: data,
        methods:{
            deleteRamal : deleteRamal,
            agregarRamal : agregarRamal
        }
    })

}


function CreateTableBranches(nombre, th1, th2, th3, th4, td1, td2, td3, td4, id, loop){
    body = document.getElementById("body")
    const div = document.createElement("div")
    div.setAttribute("class", "container")
    const h2 = document.createElement("h2")
    h2.innerText = nombre
    const table = document.createElement("table")
    table.setAttribute("class", "table table-striped")
    div.appendChild(h2)
    div.appendChild(table)

    table.appendChild( CrearTheadBranch(th1, th2, th3, th4, nombre))
    table.appendChild( CrearTBodyBranch(td1, td2, td3, td4, id, loop))
    

    body.appendChild(div)
}








function CrearBotonBranch(texto, target, funcion, objeto){
    const boton = document.createElement("button")
    boton.setAttribute("type", "button")
    boton.setAttribute("class", "btn btn-primary")
    boton.setAttribute("data-toggle", "modal")
    boton.setAttribute("data-target", "#" + target)
    boton.setAttribute("id", "Boton" + funcion + objeto)

    const a = document.createElement("a")
    a.innerText = texto
    boton.appendChild(a)

    return boton
}


function CrearTBranch(texto, boton, thtd, funcion, objeto, eliminar){
    let t 
    if(thtd == "th"){
        t = document.createElement("th")
    }else{
        t = document.createElement("td")
    }
    if(boton == "1"){

        if(eliminar == "1"){
            const a = document.createElement("a")
            a.setAttribute("v-on:click", "deleteRamal(branch)")
            a.appendChild(CrearBotonBranch(texto, "Modal" + funcion + objeto , funcion, objeto))
            t.appendChild(a)
        }else{
            t.appendChild(CrearBotonBranch(texto, "Modal" + funcion + objeto , funcion, objeto))
        }
    }else{
        t.innerText = texto
    }
    
    return t
}

function CrearTheadBranch(th1, th2, th3, th4, objeto){
    const thead = document.createElement("thead")
    const tr = document.createElement("tr")
    tr.appendChild(CrearTBranch(th1, "0", "th"))
    tr.appendChild(CrearTBranch(th2, "0", "th"))
    tr.appendChild(CrearTBranch(th3, "0", "th"))
    tr.appendChild(CrearTBranch(th4, "1", "th", "Crear", objeto))

    thead.appendChild(tr)

    return thead

}


function CrearTBodyBranch(td1, td2, td3, td4, id, loop){
    const tbody = document.createElement("tbody")
    tbody.setAttribute("id", id)
    //tbody.appendChild(  crearInputBranch("nombre") )
    const tr = document.createElement("tr")
    tr.setAttribute("v-for",loop)
    tr.appendChild(CrearTBranch(td1, "0", "td"))
    tr.appendChild(CrearTBranch(td2, "0", "td"))
    tr.appendChild(CrearTBranch(td3, "1", "td", "ModalEditar"))
    tr.appendChild(CrearTBranch(td4, "1", "td", "ModalEliminar", "1","1"))
    //crearModalEliminar("ModalEliminar")
    tbody.appendChild(tr)




    return tbody

}






function crearInputBranch(texto){
    const div = document.createElement("div")
    const label = document.createElement("label")
    label.innerText = texto + ":"
    const input = document.createElement("input")
    input.setAttribute("type", "text")
    input.setAttribute("class", "form-control")
    input.setAttribute("id", texto)
    input.setAttribute("placeholder", "por favor ingrese el " + texto)
    input.setAttribute("v-model", "nuevoRamal")
    const boton = document.createElement("button")
    boton.setAttribute("type", "button")
    boton.setAttribute("class", "btn btn-success")
    boton.setAttribute("v-on:click", "agregarRamal(nuevoRamal)")
    boton.innerText = "Guardar"


    div.appendChild(label)
    div.appendChild(input)
    div.appendChild(boton)
    return div
}
