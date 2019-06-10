let router = require("express").Router();
let config = require("../config/config.js");
let mysql = require("mysql");
let connection = mysql.createConnection(config);


router.get("/usuarios",(req,res)=>{

let sql="call susuario()";
connection.query(sql,true,(error,results,fields)=>{
if (error){
  res.send(error.message);
}
res.send(results[0]);
});
connection.end();
});

module.exports=router;