let check = require("express-validator");
module.exports = (req, res, next) =>{
    const {nombre,apellido,usuario,estado,contra} = req.body;
   




    
    if( !nombre ) {

        res.status(400).send({message:"El campo nombre es obligatorio"});
        return;
    }
    if( !usuario ) {
      res.status(400).send({message:"El campo usuario es obligatorio"});
      return;
  }
  if( !contra ) {
    res.status(400).send({message:"El campo contraseña es obligatorio"});
    return;
  }
}