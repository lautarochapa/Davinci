
var token = document.head.querySelector('meta[name="csrf-token"]');
window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;

/*
function crearModal(id){
    const body = document.getElementById("body")
    const div1 = document.createElement("div")
    div1.setAttribute("class", "modal fade in")
    div1.setAttribute("id", id)
    div1.setAttribute("role", "dialog")
    const div2 = document.createElement("div")
    div2.setAttribute("class", "modal-dialog")
    const div3 = document.createElement("div")
    div3.setAttribute("class", "modal-content")
    const div4 = document.createElement("div")
    div4.setAttribute("class", "modal-header")
    const div5 = document.createElement("div")
    div5.setAttribute("class", "modal-body")
    const div6 = document.createElement("div")
    div6.setAttribute("class", "modal-footer")

    const boton1 = document.createElement("button")
    boton1.setAttribute("type", "button")
    boton1.setAttribute("class", "close")
    boton1.setAttribute("data-dismiss", "modal")
    boton1.innerText = "×"

    const boton2 = document.createElement("button")
    boton2.setAttribute("type", "button")
    boton2.setAttribute("class", "btn btn-default")
    boton2.setAttribute("data-dismiss", "modal")
    boton2.innerText = "Close"

    const h4 = document.createElement("h4")
    h4.setAttribute("class", "modal-title")
    h4.innerText = "Hi"

    const p = document.createElement("p")
    p.innerText = "IPSUM"

    div1.appendChild(div2)
    div2.appendChild(div3)
    div3.appendChild(div4)
    div3.appendChild(div5)
    div3.appendChild(div6)

    div4.appendChild(boton1)
    div4.appendChild(h4)
    div5.appendChild(p)
    div6.appendChild(boton2)

    body.appendChild(div1)

}
*/


function crearModal(id, child1, child2, child3, child4, child5, child6, child7, child8){
    const div = document.createElement("div")
    div.setAttribute("class", "modal fade in")
    div.setAttribute("id", id)
    div.setAttribute("role", "dialog")
    div2 = crearDiv("modal-dialog")
    div2.appendChild( crearDiv("modal-header", child1, child4, "0", "0"))
    div2.appendChild( crearDiv("modal-body", child5, child6, child7, child8))
    div2.appendChild( crearDiv("modal-footer", child2, child3, "0", "0"))
    return div
}

function crearDiv(clase, child1, child2, child3, child4){
    const div = document.createElement("div")
    div.setAttribute("class", clase)
    if(child1 != "0"){
        div.appendChild(child1)
    } 
     if(child2 != "0"){
        div.appendChild(child2)
    }
    if(child3 != "0"){
        div.appendChild(child3)
    } 
     if(child4 != "0"){
        div.appendChild(child4)
    }

    return div
}

function crearBoton(clase, id, texto){
    const boton = document.createElement("button")
    boton.setAttribute("type", "button")
    boton.setAttribute("class", clase)
    boton.setAttribute("data-dismiss", "modal")
    if(id != "0"){
        boton.setAttribute("id", id)
    }
    boton.innerText = texto
    return boton
}

function crearTitulo(clase, texto){
    const h4 = document.createElement("h4")
    h4.setAttribute("class", clase)
    h4.innerText = texto
    return h4
}

function crearModalNuevo(id){
    const body = document.getElementById("body")

    const botonCerrar =  crearBoton("close", "0", "×")
    const botonCerrar2 = crearBoton("close", "0", "Close")
    const botonCrear = crearBoton("close", "save"+ id.substring(10), "Guardar")
    botonCrear.addEventListener("click", showMessage)

    const h4 = crearTitulo("modal-title", "Crear " + id.substring(10))

    const input1 = crearInput("nombre")
    const input2 = crearInput("a")
    const input3 = crearInput("b")
    const input4 = crearInput("c")
 
    body.appendChild( crearModal(id, crearBoton("close", "0", "×"), botonCerrar2, botonCrear, h4, input1, input2, input3, input4))

    function showMessage(){
        if(id.substring(10)== "Ramales"){
            crearRamal()
        }else{
            crearParada()
        }
    }

}




function crearRamal(){

      
    axios.post("/branches", branch)
        .then((resp)=> console.log( resp.data))
        .catch((err)=>
            console.error(err.response.data)
        )
    

    console.log("nuevo ramal creado con exito")
}

function crearParada(){
    console.log("nueva parada creada con exito")
}






    function crearInput(texto){
        const div = document.createElement("div")
        const label = document.createElement("label")
        label.innerText = texto + ":"
        const input = document.createElement("input")
        input.setAttribute("type", "text")
        input.setAttribute("class", "form-control")
        input.setAttribute("id", texto)
        div.appendChild(label)
        div.appendChild(input)
        return div
    }




