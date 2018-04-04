window.addEventListener("load",()=> {
    const data = {branches: [], newBranch : ""}
    
    function updateTable(){
        axios.get("/branches")
            .then((resp)=>
                data.branches = resp.data
            )
            .catch((err)=>
                console.error(err.response.data)
            )
    }

    function deleteRamal(branch){
        axios.delete("/branches/" + branch.id)
            .then((resp)=>updateTable())
            .catch((err)=>
                console.error(err.response.data)
            )
    }

    function agregarRamal(name){
        axios.post("/branches/",{name:name})
            .then((resp)=>{
                updateTable();
                data.newBranch = "";   
            })
            .catch((err)=>
                console.error(err.response.data)
            )
    }

    //Comando Vue Js

    new Vue({
        el: '#branches',
        data: data,
        methods:{
            deleteRamal : deleteRamal,
            agregarRamal : agregarRamal
        }
    })

    updateTable();
})
