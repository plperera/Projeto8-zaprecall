import ReactDom from "react-dom";
import React from "react";

import Tela01 from "./Tela01";
import Tela02 from "./Tela02";

function App () {

    const listaPerguntas = {
        Pergunta: [
            "O que é JSX?",
            "O React é __",
            "Componentes devem iniciar com __",
            "Podemos colocar __ dentro do JSX",
            "O ReactDOM nos ajuda __",
            "Usamos o npm para __",
            "Usamos props para __",
            "Usamos estado (state) para __"

        ],
        Resposta: [
            "Uma extensão de linguagem do JavaScript",
            "uma biblioteca JavaScript para construção de interfaces",
            "letra maiúscula",
            "expressões",
            "interagindo com a DOM para colocar componentes React na mesma",
            "gerenciar os pacotes necessários e suas dependências",
            "passar diferentes informações para componentes",
            "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        ]       
    }

    const [telaAtual, setTelaAtual] = React.useState(true)
    
    return (

        <>  
        {telaAtual ? 
        (
            <div className="content">
                <Tela01 />
                <div className="button" onClick={() => setTelaAtual(!telaAtual)}>Iniciar Recall!</div>
            </div>     
        ):
        (
            <div className="content">
                <Tela02 listaPerguntas= {listaPerguntas}/>
                <div className="button" onClick={() => setTelaAtual(!telaAtual)}>Voltar!</div>
            </div>      
        )}
        </>   
    )
}

ReactDom.render(<App />, document.querySelector(".root"));