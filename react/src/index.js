import React from "react"
import ReactDOM  from "react-dom"
import Button from "./Button"
import ComponenteA from "./ComponenteA"
import ComponenteB from "./ComponenteB"
import "./styles.css"

function soma(a,b) {
    alert(a+b)
}

function App(){
    return(
        <div className="App">
            Hello Word
            <Button onClick={() => soma(10, 20)} name="Soma 20" />
            <ComponenteA>
                <ComponenteB>
                    <Button onClick={() => soma(10, 30)} name="Soma 30" />
                </ComponenteB>
            </ComponenteA>
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)