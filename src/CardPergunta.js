import React from "react"

import Pergunta from "./Pergunta"
import Titulo from "./Titulo"

export default function CardPergunta (props) {

    const [clicado, setClicado] = React.useState(false)
    
    return (

        <>
            {clicado ? (
            <>
            <Pergunta 
                clicado= {clicado}
                setClicado={setClicado}
                Pergunta={props.Pergunta}
                indice={props.indice} 
                listaPerguntas={props.listaPerguntas} 
            />
            </>
            ):(
            <>
            <Titulo 
                clicado= {clicado}
                setClicado={setClicado}
                Pergunta={props.Pergunta}
                indice={props.indice} 
                listaPerguntas={props.listaPerguntas} 
            />
            </>
            )
            }            
        </>

    )
}