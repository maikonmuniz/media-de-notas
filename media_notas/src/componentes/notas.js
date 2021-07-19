import React from 'react'




export default function Nota(props){

    return(
        <>
        <input value={props.nota} onChange={(e) => props.setNota(e.target.value)}/>
        </>
    )
}