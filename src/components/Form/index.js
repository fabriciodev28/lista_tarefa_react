import React from "react"
import PropTypes from "prop-types"
import { FaPlus } from "react-icons/fa"

import './Form.css'

function Form({ handleChange, handleSubmit, novaTarefa}){
    return(
        <form className="form" onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" value={novaTarefa}></input>
            <button type="submit"><FaPlus/></button>
        </form>
    )
}

Form.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string.isRequired
}

export default Form