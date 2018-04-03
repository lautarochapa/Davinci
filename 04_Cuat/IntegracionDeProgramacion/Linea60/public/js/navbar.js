
function crearNav(){
    const body = document.getElementById("body")

    const div1 = document.createElement("div")
    const brbr = document.createElement("br")
    const h3 = document.createElement("h3")
    h3.innerText = "Linea 60"
    const h2 = document.createElement("h2")
    h2.innerText = "Bienvenidos a la pagina de la linea 60"
    const p = document.createElement("p")
    p.innerText = "En esta pagina encontraran toda la informacion de los ramales de la linea 60 asi como tambien los horarios y las paradas"
    
    div1.appendChild(h3)
    div1.appendChild(h2)
    div1.appendChild(p)
    
    
    const nav = document.createElement("nav")
    nav.setAttribute("class", "navbar navbar-expand-sm bg-dark navbar-dark sticky-top")
    
    const a = document.createElement("a")
    a.setAttribute("class", "navbar-brand")
    a.setAttribute("href", "index.html")
    a.innerText = "Inicio"
    
    const ul = document.createElement("ul")
    ul.setAttribute("class", "navbar-nav")
    
    ul.appendChild( crearLi("Ramales"))
    ul.appendChild( crearLi("Paradas"))
    ul.appendChild( crearLi("Registrarse"))
    
    nav.appendChild(a)
    nav.appendChild(ul)
    
    
    body.appendChild(div1)
    body.appendChild(brbr)
    body.appendChild(nav)
    body.appendChild(brbr)
    body.appendChild(brbr)
}



function crearLi(text){
    const li = document.createElement("li")
    li.setAttribute("class", "nav-item")

    const a = document.createElement("a")
    a.setAttribute("class", "nav-link")
    a.innerText = text
    a.setAttribute("id", "Link"+ text)

    li.appendChild(a)
    return li
}
