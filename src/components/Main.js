import React, { Component } from "react"

//Form
import { FaPlus } from "react-icons/fa"

//Form
import { FaEdit, FaWindowClose } from "react-icons/fa"

import './Main.css'

class Main extends Component {
    state = {
        novaTarefa: '',
        tarefas: []
    }


    handleSubmit = (e) =>{
        e.preventDefault()
        const { tarefas } = this.state
        let { novaTarefa } = this.state
        novaTarefa = novaTarefa.trim()

        if(tarefas.indexOf(novaTarefa) !== -1) return

        const novasTarefas = [...tarefas]

        this.setState({
            tarefas: [...novasTarefas, novaTarefa]
        })
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

                <form className="form" onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text"></input>
                    <button type="submit"><FaPlus/></button>
                </form>

                <ul className="tarefas">
                    {tarefas.map((tarefa)=>(
                        <li key={tarefa}>
                            {tarefa}
                            <span>
                                <FaEdit className="edit"/>
                                <FaWindowClose className="delete"/>
                            </span>
                        </li>
                    ))}
                </ul>

            </div>
        )
    }


}

export default Main