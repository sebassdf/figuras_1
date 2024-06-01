const { request , response } = require("express");
const { figuras } = require("../figuras"); 

const getFiguras = ( req , res )=> {
        return res.json({
            ok:true,
            statusCode:200,
            figuras
        });
}

const getFigurasById = ( req = request , res = response )=> {

    let id = parseInt(req.params.id);

    let figuraABuscar = "";

    figuraABuscar = figuras.find(( figura )=> {
        return figura.id === id; 
    });

    if(figuraABuscar){
        return res.json({
            ok:true,
            statusCode:200,
            figuraABuscar
        });
    }else{
        return res.json({
            ok:true,
            statusCode:404,
            msg:"No hay figuras con ese id"
        });
    }
}

module.exports = {
    getFiguras,
    getFigurasById
}