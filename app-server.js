import path from 'path'
import express from 'express'
// const nodemailer = require('nodemailer')
import bodyParser from 'body-parser'
import React from 'react'
// const ContactFormFactory = React.createFactory(require('./src/container/Contact/ContactForm.js'))
const BUILD_DIR = path.join(__dirname, "dist"),
    PORT = process.env.PORT || 8081,
    app = express()

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers')
    
    next()
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use(express.static(BUILD_DIR))

app.use((req, res, next) => {
    res.sendFile(path.join(BUILD_DIR, 'index.html'))
})

app.use((req, res, next) => {
    const err = new Error("Not Found")
    err.status = 404
    next(err)
})


// app.get('/',(req, res) => {
//     const ContactFormOne = React.renderToString(ContactFormFactory())
//     res.render( {Content: ContactFormOne}) 
// })

 app.post('/contact', (req, res) => {
    let info = req.body
    console.log(info);
 })

app.listen(PORT)
console.log('server started');