const express = require("express");
const cors = require("cors");
const importafuncion = require("./mail_service");

const app = express();
app.use(cors({
    origin:"http://localhost:3000"
}));
app.use( express.text());
app.get("/",(req, res)=>{res.send("soy el home")});
app.get("/users", (req, res)=>{
    res.send({"nombre":"yoiler"});
    console.log(req.body);
});


app.post("/email-enviar",(req, res)=>{
    res.send("todo ok");
    let datos = (req.body);
    let datoss = JSON.parse(datos);
    importafuncion.Enviar(datoss._nombre, datoss._email, datoss._telefono, datoss._mensaje);
});

app.listen(3001, ()=>{
    console.log("corriendo el servidor en el puerto 3001")
});







