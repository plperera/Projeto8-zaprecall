import React from "react"
export default function Pergunta (props) {

    const [clicado, setClicado] = React.useState(false)



    return (

        <div className="ask" onClick={() => setClicado(!clicado)}>

            {clicado ? (
            <>
            <span>{props.Pergunta}</span>
            <ion-icon name="swap"></ion-icon>
            </>)
            :(
            <>
            <Pergunta indice={props.indice}/>
            </>)

            } 
            
        </div>

    )
}