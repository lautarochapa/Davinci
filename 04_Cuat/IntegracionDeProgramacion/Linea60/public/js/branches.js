window.addEventListener("load",()=> {
    const data = {branches: []}
    axios.get("/branches")
        .then((resp)=> data.branches = resp.data)
        .catch((err)=>
            console.error(err.response.data)
        )
    
    var branches = new Vue({
        el: '#branches',
        data: data
    })

   
})
