import CardPergunta from "./CardPergunta"
import Resultado from "./Resultado"

import React from "react"
export default function Tela02 (props) {

    console.log(props.listaPerguntas)
    const [pontos, setPontos] = React.useState([])

    return (

        <>
            {/* <img src="./assets/img/logo.png" alt=""></img> */}

            <span className="tittle">ZapRecall</span>

            {props.listaPerguntas.Pergunta.map( (lista, indice) => 

            <CardPergunta 
                Pergunta={lista} 
                listaPerguntas={props.listaPerguntas} 
                indice={indice}
                key={indice}
                pontos={pontos}
                setPontos={setPontos}
            />
            )}
            <Resultado 
                listaPerguntas={props.listaPerguntas}
                pontos={pontos}
                setPontos={setPontos}
            />     
        </>
        // <Pergunta Pergunta={listaPerguntas} listaPerguntas={props.listaPerguntas} key={index}/>
    )
}