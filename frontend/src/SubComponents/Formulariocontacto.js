import { useState } from "react";

export const Formulariocontacto = ()=>{
    const [ estado, setEstado ] = useState();
    return (
        <>
        <div className="Secciones seccionformulariocontacto">
            <form id="Formulario" className="Formulario">
                <h1>Contactame!!!</h1>
                <div className="Formulariocampos"><p>Nombre:</p><input id="input_nombre" name="Nombre" type="text" placeholder="nombre"></input></div>
                <div className="Formulariocampos"><p>Correo:</p><input id="input_email" name="email" type="email" placeholder="ejemplo@gmail.com"></input></div>   
                <div className="Formulariocampos"><p>Telefono:</p><input id="input_telefono" name="telefono" type="tel" placeholder="telefono"></input></div>
                <div className="Formulariocampos  Formulariocampostextarea"><p>Mensaje:</p><textarea id="input_texto" name="mensaje" className="Formulariocampostextareasms" placeholder="envianos tu mensaje"></textarea></div>
                <div className="Formulariocampos"><input className="inputformulariocampos" type="submit" onClick={async(e)=>{
                    e.preventDefault();
                    const form = document.getElementById("Formulario");
                    const input_nombre = document.getElementById("input_nombre").value;
                    const input_email = document.getElementById("input_email").value;
                    const input_telefono = document.getElementById("input_telefono").value;
                    const input_texto = document.getElementById("input_texto").value;
                    if ( input_nombre == "" || input_email == ""  || input_telefono == "" || input_texto == ""){
                        alert("llena todos los campos")
                    }else{
                        let formulary = new FormData(form);
                    
                    let desglosado = {
                        _nombre:`${formulary.get("Nombre")}`,
                        _email:`${formulary.get("email")}`,
                        _telefono:`${formulary.get("telefono")}`,
                        _mensaje:`${formulary.get("mensaje")}`
                    }
                    let parsetjson = JSON.stringify(desglosado)
                    fetch("http://localhost:3001/email-enviar",{
                        "Content-Type": "application/json",
                        method:"POST",
                        body: parsetjson
                    })
                    .then( res => res.json())
                    .then(res => {
                    }).catch(error => console.log("error", error))
                    form.reset()

                    }

                        

                    
                    
                }}></input></div>
            </form>
        </div>
        </>
    )
}
