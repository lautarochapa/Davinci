window.addEventListener("load",()=> {
    const data = {stops: []}
    axios.get("/stops")
        .then((resp)=> data.stops = resp.data)
        .catch((err)=>
            console.error(err.response.data)
        )
    
    var stops = new Vue({
        el: '#stops',
        data: data
    })
   
    axios.get("/stops/branchName/3")
    .then((resp)=> console.log(resp.data))
    .catch((err)=>
        console.error(err.response.data)
    )

})
