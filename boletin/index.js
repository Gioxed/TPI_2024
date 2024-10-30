import express  from "express";
//Fix para __direname
import path from "path";
import {fileURLToPath} from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//server
const app = express();
app.set("port", 4000);
app.listen(app.get("port"));
console.log("servidor corriendo en puerto", app.get("port"));

//Configuracion
app.use(express.static(__dirname + "/css/styles.css"));
app.use(express.static(path.join(__dirname, '/css')));

//Rutas
app.get("/", (req,res)=> res.sendFile(__dirname + "/login.html"))
