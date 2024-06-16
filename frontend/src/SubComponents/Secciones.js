

export const Secciones = (props)=>{
    return (
        <div className="Secciones">
            <img src={props.url}></img>
            <div>
                <h1>{props.titulo}</h1>
                <p>{props.parrafo}</p>
                <p>{props.parrafo2}</p>
                <p>{props.parrafo3}</p>
            </div>
        </div>
    )
}