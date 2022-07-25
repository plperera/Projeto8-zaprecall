import React from "react"

import Resposta from "./Resposta"

export default function Pergunta (props) {

    const [resposta, setResposta] = React.useState(false)

    return (
        
    <> 
        { resposta ? (
                
            <Resposta 
                clicado= {props.clicado}
                setClicado={props.setClicado}
                Pergunta={props.Pergunta}
                indice={props.indice} 
                listaPerguntas={props.listaPerguntas} 
                estilo={props.estilo}
                setEstilo={props.setEstilo}
                pontos={props.pontos}
                setPontos={props.setPontos}
            />
           
        ):(
           
            <div className="ask" onClick={() => setResposta(!resposta)}>
            <span>{props.Pergunta}</span>
            <ion-icon name="swap"></ion-icon>
            </div>
            
        )

        }
    </>    
    )
}