let router = require("express").Router();
let config = require("../config/config.js");
let mysql = require("mysql");
let jwt = require("jsonwebtoken");



router.post("/login",(req,res)=>{
const {usuario,contraseña} = req.body;
let sql="call flogin('"+usuario+"','"+contraseña+"')";
let connection = mysql.createConnection(config);
connection.query(sql,true,(error,results,fields)=>{
if (error){
  res.send(error.message);
}
let token=     jwt.sign("hhhhhhhhhhhhhh","secret");
res.send(token)
console.log(usuario,contraseña);
});
connection.end();
});

module.exports=router;