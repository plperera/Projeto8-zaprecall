import React from "react"

export default function Resposta (props) {

    const [pontos, setPontos] = React.useState(0)

    return (
        
    <> 

        <div className="ask">
        
        <div>

            <span>{props.listaPerguntas.Resposta[props.indice]}</span>
            <ion-icon name="swap"></ion-icon>
            
        </div>
        
        
        <div className="containerPontos">

            <div className="naoLembrei" onClick={() => props.setClicado(!props.clicado)}>
            </div>

            <div className="quaseLebrei" onClick={() => props.setClicado(!props.clicado)}>
            </div>

            <div className="Lembrei" onClick={() => props.setClicado(!props.clicado)}>
            </div>
            
      

        </div>

        </div>
    </>    
    )
}