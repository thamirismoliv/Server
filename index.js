const express = require('express')
const app = express()

//a porta onde o servidor vai rodar
app.listen(3333, (error) => {
        if(error) {
        console.log("Error")
    }else{
        console.log("Runing in LocalHost:3333")
    }
})