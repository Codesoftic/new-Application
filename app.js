const express = require('express');
const res = require('express/lib/response');

const app =express()

const port =4500


app.get('/',()=>{
    res.send("hello word");
})


app.listen(port,()=>{
    console.log(`server is running on port number ${port}`)
})

