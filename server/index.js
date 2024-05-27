const express = require('express');
const app = express();
const cors = require("cors")
const bodyParser = require("body-parser")
const axios = require("axios");

app.use(bodyParser.urlencoded({expended: true}))
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

app.get("/", (req, res) =>{
    let config ={
        method: "GET",
        url : "https://api.jsonbin.io/v3/b/6654d62facd3cb34a84e8a70",
        headers: {
            "Content-Type": "application/json",
            "X-Master-Key": "$2a$10$rhax496YXf/0IQXYzz4CTujv/vVetDrw4pJbOrwjq4/aTUhDePQSe"
        }
    }
    axios(config)
       .then(result =>{
        res.send(result.data.record)
    })
})

const user = require("./controler/userControler")
app.use("/registro-usuario", user.register)
// app.use("/login",user.login)

const PORT = 3001
app.listen(PORT,()=>{
    console.log("servidor corriendo en el puerte ", PORT)
})