import React from "react"

import Pergunta from "./Pergunta"
import Titulo from "./Titulo"

export default function CardPergunta (props) {

    const [clicado, setClicado] = React.useState(false)
    const [estilo, setEstilo] = React.useState("ask")
    
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
                estilo={estilo}
                setEstilo={setEstilo}
                pontos={props.pontos}
                setPontos={props.setPontos}
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
                estilo={estilo}
                setEstilo={setEstilo}
            />
            </>
            )
            }            
        </>

    )
}