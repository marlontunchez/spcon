let express= require("express");
let app = express();
let port = process.env.port|| 3000;
let cors= require("cors");
let rindex= require("./src/routes/index.js");
let morgan = require("morgan");
app.use(express.json());
app.use(morgan("dev"));
app.use(rindex);
app.listen(port,()=>{
console.log("El servidor esta corriendo en el puerto: "+port);
});