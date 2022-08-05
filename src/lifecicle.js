import React, {Component} from "react"
import ReactDOM from "react-dom"
import "./styles.css"

class App extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            clock: 1000,
            copo: 'água'
        }
    }

    componentDidMount() {
        window.setTimeout(() => {
            this.setState({
                copo: 'suco'
            })
        }, 3000)
    }

    alteraCopo = () => {
        this.setState({
            copo: 'refrigerante'
        })

    }

    render() {
        const {clock, copo} = this.state
        return(
            <div>
                <h1>clock</h1>
                <button onClick={() => this.alteraCopo()}><h1>{copo}</h1></button>
            </div>
        )
    }
}
