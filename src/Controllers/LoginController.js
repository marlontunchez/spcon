let config = require("../config/config.js");
let mysql = require("mysql");
let jwt = require("jsonwebtoken");
let connection= mysql.createConnection
function login(req, res){
  const {usuario,contraseña} = req.body;
  let sql="call flogin('"+usuario+"','"+contraseña+"')";
  let connection = mysql.createConnection(config);
  connection.query(sql,true,(error,results,fields)=>{
  if (error){
    res.send(error.message);
  }
  let obj = results[0];
 
  if (JSON.stringify(obj)=='[]') {
        res.status(500).send({
        error: 'usuario o contraseña inválidos'
      })
  }else{
    var tokenData = {
      codigousuario:obj[0].codigousuario,
      usuario: obj[0].usuario    
    }
       var token = jwt.sign(tokenData, config.security_key, {
       expiresIn: 60 * 20 * 24*24 // expires in 24 hours
    })
   
    res.send({
      token
    })
      }
  
  });
  connection.end(); 
}
      module.exports = {
        login
    };
    