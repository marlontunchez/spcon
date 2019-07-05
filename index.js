let express= require("express");
let app = express();
let port = process.env.port;
let cors= require("cors");
let rusuario= require("./src/routes/rusuario.js");
let rlogin= require("./src/routes/rlogin.js");

let morgan = require("morgan");
app.use(express.json());
app.use(morgan("dev"));
app.use('/api', rusuario);
app.use('/api', rlogin);

app.listen(port,()=>{
console.log("El servidor esta corriendo en el puerto: "+port);
});
module.exports = app;
