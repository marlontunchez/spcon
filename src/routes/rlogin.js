let router = require("express").Router();
router.get("/login",(req,res)=>{
    let mysql = require("mysql");
   let config = require('../config/config.js');  
    let connection = mysql.createConnection(config);
    let sql = `CALL susuario()`;
    
    connection.query(sql, true, (error, results, fields) => {
      if (error) {
        res.send(error.message);
      }
      res.send(results[0]);
    });
     
    connection.end();
}
);
module.exports=router;