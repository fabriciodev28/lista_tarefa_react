import React, { Component } from "react"

//Form
import { FaPlus } from "react-icons/fa"

//Form
import { FaEdit, FaWindowClose } from "react-icons/fa"

import './Main.css'

class Main extends Component {
    state = {
        novaTarefa: '',
        tarefas: [
            'Estudar',
            'Fazer exercício',
        ]
    }
    
    handleChange = (e) =>{
        this.setState({
            novaTarefa: e.target.value
        })
    }



    render(){
        
        const {novaTarefa, tarefas} = this.state

        return(
            <div className="main">
                <h1>Lista de Tarefas</h1>

                <form className="form">
                    <input onChange={this.handleChange} type="text"></input>
                    <button type="submit"><FaPlus/></button>
                </form>

                <ul className="tarefas">
                    {tarefas.map((tarefa)=>(
                        <li key={tarefa}>
                            {tarefa}
                            <div>
                                <FaEdit className="edit"/>
                                <FaWindowClose className="delete"/>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
        )
    }


}

export default Main