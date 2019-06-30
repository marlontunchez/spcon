var moment = require('moment');
let config =require("../config/config.js")
var jwt = require('jsonwebtoken')
let token =""

module.exports = (req, res, next) =>{
    token = req.headers['authorization']
  
    if (token=="j" || token==""|| token==null) {
       return res.status(401).send({
    message: 'Es necesario un token'
 })
  }else{ 
      
    token = token.replace('Bearer ', '')
 
    jwt.verify(token, config.security_key, function(err, user) {
      if (err) {
        return res.status(401).send({
            message: 'Token inválido'
         })
       
      } else {  
         var payload = jwt.decode(token, config.security_key);
   
         if(payload.exp <= moment().unix()) {
               return res.status(401)
            .send({message: "El token ha expirado"});
        }else{
            next();
        }
      }
    })
 }
}