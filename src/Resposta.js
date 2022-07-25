import React from "react"

export default function Resposta (props) {

    

    return (        
    <> 
        <div className="ask">
        
            <div>

                <span>{props.listaPerguntas.Resposta[props.indice]}</span>
                <ion-icon name="swap"></ion-icon>
                
            </div>
              
            <div className="containerPontos">

                <div className="naoLembrei" onClick={() => {

                    props.setClicado(!props.clicado)
                    props.setEstilo("ask vermelho")
                    props.setPontos(["close-circle", ...props.pontos])

                }}>
                    Não lembrei
                </div>

                <div className="quaseLebrei" onClick={() => {

                    props.setClicado(!props.clicado)
                    props.setEstilo("ask amarelo")
                    props.setPontos(["help-circle", ...props.pontos])

                }}>
                    Quase não lembrei
                </div>

                <div className="Lembrei" onClick={() => {

                    props.setClicado(!props.clicado)
                    props.setEstilo("ask verde")
                    props.setPontos(["checkmark-circle", ...props.pontos])

                }}>
                    Zap!
                </div>

            </div>
        </div>
    </>    
    )
}