// src/components/TaskForm/TaskForm.jsx

import React, { useState } from 'react';
import './styles.css'; // Ajoutez le fichier de style CSS
import api from "../../connect/api";

function TaskForm({onTaskAdded}) {
    const [task, setTask] = useState({
        title: '',
        description: '',
        dueDate: '',
        category: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTask({
            ...task,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response =  await api.url('/tasks')
            .post(task)
            .json();
        
        if(!response) {
            alert("Erreur lors de l'envoi des données");
        } else {
            onTaskAdded();
        }
    };

    return (
        <div className="task-form">
            <h2>Create a Task</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={task.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={task.description}
                        onChange={handleInputChange}
                    />
                    </div>
                    <div className="form-group">
                        <input
                            type="date"
                            name="dueDate"
                            value={task.dueDate}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="category"
                            placeholder="Category"
                            value={task.category}
                            onChange={handleInputChange}
                        />
                    </div>
                <button type="submit" onClick={handleSubmit}>Create Task</button>
            </form>
        </div>
    );
}

export default TaskForm;
