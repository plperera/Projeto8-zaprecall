import React from "react"
export default function Resultado (props) {
let aux
    return (

        <div className="containerResultado">
            
            

            {props.pontos.length === props.listaPerguntas.Pergunta.length ? 
                (props.pontos.filter((icon) => icon === "close-circle").length === 0 ? 
                    (
                    <>
                        <h3>Parabéns!</h3>
                        <span>Você não esqueceu de nenhum flashcard!</span>
                    </>
                    ):
                    (
                    <>
                        <h3>Putz...</h3>
                        <span>Ainda faltam alguns...Mas não desanime!</span>
                    </>
                    )
                ):(<></>)}

            <span>{props.pontos.length}/{props.listaPerguntas.Pergunta.length} Concluídos</span>
            <div>
            {
                props.pontos.map((icon, indice) => 
                    <ion-icon name={icon} key={indice}></ion-icon>
                )
            }
            </div>
        </div>
    )
}