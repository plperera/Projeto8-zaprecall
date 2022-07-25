export default function Titulo (props) {

    let icon

    switch (props.estilo) {
        case "ask":

            icon = "swap"
            break;
    
        case "ask vermelho":
            
            icon = "close-circle"
            break;
    
        case "ask verde":
            
            icon = "checkmark-circle"
            break;

        case "ask amarelo":
            
            icon = "help-circle"
            break;
    
    }

    return (
        <div className={props.estilo} onClick={() => props.estilo === "ask" ? props.setClicado(!props.clicado):""}>
            <span>Pergunta {props.indice + 1}</span>
            <ion-icon name={icon}></ion-icon>
        </div>
    )
}