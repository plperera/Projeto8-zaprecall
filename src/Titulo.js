export default function Titulo (props) {

    return (
        <div className="ask" onClick={() => props.setClicado(!props.clicado)}>
        <span>Pergunta {props.indice + 1}</span>
        <ion-icon name="play"></ion-icon>
        </div>
    )
}