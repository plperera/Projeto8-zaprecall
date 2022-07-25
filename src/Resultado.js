import React from "react"
export default function Resultado (props) {

    return (
        
        <div className={props.pontos.length === props.listaPerguntas.Pergunta.length ? ("containerResultado finalização"):("containerResultado")}>
            
            {props.pontos.length === props.listaPerguntas.Pergunta.length ? 
                (props.pontos.filter((icon) => icon === "close-circle").length === 0 ? 
                    (
                    <>
                        <h3>🥳 Parabéns!</h3>
                        <span>Você não esqueceu de nenhum flashcard!</span>
                    </>
                    ):
                    (
                    <>
                        <h3>😥 Putz...</h3>
                        <span>Ainda faltam alguns...Mas não desanime!</span>
                    </>
                    )
                ):(<></>)}

            <span>{props.pontos.length}/{props.listaPerguntas.Pergunta.length} Concluídos</span>
            <div className="container-icon">
            {
                props.pontos.map((icon, indice) => 
                    <div className={icon}>
                        <ion-icon name={icon} key={indice}></ion-icon>
                    </div>
                )
            }
            </div>
        </div>
    )
}