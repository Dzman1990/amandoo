var knex = require("./db")



knex("users").select("*").where({ id:10 }).then(function(rows){
    if(rows.length>0){
        console.log(rows)
    }else{ 
        console.log('No rows')
     }
    
})

