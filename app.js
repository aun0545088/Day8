const express = require("express")
const app = express()
const port  = 7776

app.listen(port,()=>{
    console.log(`Server is listening on port: ${port}`)
})