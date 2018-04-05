

function crearModalNuevo(id){
    const body = document.getElementById("branches")
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

    const boton3 = document.createElement("button")
    boton3.setAttribute("type", "button")
    boton3.setAttribute("class", "btn btn-success")
    //boton3.setAttribute("id", "save"+ id.substring(10))
    
    boton3.setAttribute("data-dismiss", "modal")
    boton3.setAttribute("v-on:click", "agregarRamal(newBranch)")
    boton3.innerText = "Guardar"


    const h4 = document.createElement("h4")
    h4.setAttribute("class", "modal-title")
    h4.innerText = "Crear " + id.substring(10)

    div1.appendChild(div2)
    div2.appendChild(div3)
    div3.appendChild(div4)
    div3.appendChild(div5)
    div3.appendChild(div6)

    div4.appendChild(boton1)
    div4.appendChild(h4)
    div5.appendChild(crearInput("nombre"))
    div6.appendChild(boton2)
    div6.appendChild(boton3)

    body.appendChild(div1)

}



    function crearInput(texto){
        const div = document.createElement("div")
        const label = document.createElement("label")
        label.innerText = texto + ":"
        const input = document.createElement("input")
        input.setAttribute("type", "text")
        input.setAttribute("class", "form-control")
        input.setAttribute("id", texto)
        input.setAttribute("placeholder", "por favor ingrese el " + texto)
        input.setAttribute("v-model", "newBranch")
        div.appendChild(label)
        div.appendChild(input)
        return div
    }





//var token = document.head.querySelector('meta[name="csrf-token"]');
//window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;

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