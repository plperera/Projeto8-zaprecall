export default function Titulo (props) {

    let icon

    switch (props.estilo) {
        case "quest":

            icon = "swap"
            break;
    
        case "quest vermelho":
            
            icon = "close-circle"
            break;
    
        case "quest verde":
            
            icon = "checkmark-circle"
            break;

        case "quest amarelo":
            
            icon = "help-circle"
            break;

        default:
            break;
    
    }

    return (
        <div className={props.estilo} onClick={() => props.estilo === "quest" ? props.setClicado(!props.clicado):""}>
           
            <span>Pergunta {props.indice + 1}</span>
            
            <ion-icon name={icon}></ion-icon>
            
        </div>
    )
}