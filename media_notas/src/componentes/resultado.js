import React from 'react'



export default function Resultado(props){

    return(
    <>
        <p>{props.setMedia}</p>
        <p>{props.setMedia >= 70 ? "Aprovado":"Reprovado"}</p>
    </>
    )    

}