
const express = require("express"); 
const app = express();
const cors = require("cors"); 
const puerto = 1499;


//--------------------------


const { getFiguras, getFigurasById } = require("./controllers/figuras.controllers")

app.use(cors()); 

app.get("/" , getFiguras )

app.get("/:id" , getFigurasById )

//---------------------------


app.listen( puerto , ()=> {
    
    console.log(`Servidor arriba en el puerto ${puerto}`);
});
