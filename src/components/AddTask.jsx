import React, { useState } from 'react';

import './AddTask.css'
import Button from './Button';

const AddTask = ({ handleTaskAdition }) => {
    const [inputData, setInputData] = useState("")

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    const handleAddTaskClick = () => {
        handleTaskAdition(inputData)
        setInputData('')
    }

    return (
        <div className='add-task-container'>
            <input onChange={handleInputChange}
                value={inputData} className='add-task-input' type="text"></input>
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>

    )



}

export default AddTask;  