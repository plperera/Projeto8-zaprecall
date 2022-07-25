import CardPergunta from "./CardPergunta"
export default function Tela02 (props) {

    console.log(props.listaPerguntas)

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
        />
        )}
        
        </>
        // <Pergunta Pergunta={listaPerguntas} listaPerguntas={props.listaPerguntas} key={index}/>
    )
}