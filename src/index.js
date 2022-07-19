import ReactDom from "react-dom";

function App () {
    return (
        <div className="content">
            <img src="./assets/img/logo.png" alt=""></img>
            <span className="tittle">ZapRecall</span>
            <div className="button">Iniciar Recall!</div>
        </div>
    )
}
ReactDom.render(<App />, document.querySelector(".root"));