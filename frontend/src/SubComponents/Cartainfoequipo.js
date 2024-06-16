

export const Cartainfoequipo = (props)=>{
    return(
        <>
        <div className="Cartainfoequipo">
            <div>
                {props.logo}
                <h1>{props.nombreprojecto}</h1>
                <p>{props.parrafo}</p>
            </div>

        </div> 
        </>
    )
}