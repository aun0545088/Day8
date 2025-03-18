const express = require("express")
const app = express()
const port = 3004

app.use((req, res, next) => {
    const startTime = new Date().getTime()
    next()
    const endTime = new Date().getTime()
    console.log(endTime - startTime)
})

app.get("/", (req, res) => {
    console.log("this is home page.")
    res.send("Home page")
})

app.get("/about", (req, res) => {
    console.log("this is about page")
    res.send("About page")
})

app.get("/contacts", (req, res) => {
    console.log("this is contact page")
    res.send("Contact page")
})

app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
})
