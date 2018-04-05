const data = {
    branches: [],
    stops:[],
    newBranch : ""
}

window.addEventListener("load",()=> {
    crearNav()
    updateBranches()
    updateStops()
    ActualizarLinks()
    
})




function ActualizarLinks(){
    const LinkRamales = document.getElementById("LinkRamales")
    LinkRamales.addEventListener("click", CrearRamales)

    const LinkParadas = document.getElementById("LinkParadas")
    LinkParadas.addEventListener("click", CrearParadas)
}

