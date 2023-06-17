const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require('./config/routes');
const port = 3050;
const app = express();

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(router);

const db = require('./config/dbConnection');


app.listen(port, ()=>{
    console.log("Server is runninng at ", port);
});


