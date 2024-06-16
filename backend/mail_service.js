const nodemailer = require("nodemailer");

const Enviar=async(nombre, email, telefono, mensaje)=>{
    const config ={
        host:"smtp.gmail.com",
        port:587,
        secure: false,
        auth:{
            user:"naiyobis86@gmail.com",
            pass:"mfoz fqyr dvvp qzof"
        }
    }
    const mensajeenv ={
        from:"naiyobis86@gmail.com",
        to:"naiyobis86@gmail.com",
        subject:"Pagina web yoiler cv",
        text:`Holaa yoiler te llego un mensaje de tu pagina web, ||| ---Mensaje: ${mensaje}, ||| ---nombre${nombre}, |||---telefono${telefono}, |||---Su email${email}`
    }

    const Transporte = nodemailer.createTransport(config);
    const info = await Transporte.sendMail(mensajeenv);
    console.log(info)
    
}

module.exports={
    "Enviar":Enviar
}