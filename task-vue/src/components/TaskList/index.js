// src/components/TaskList/TaskList.jsx

import React from 'react';
import './styles.css'; // Ajoutez le fichier de style CSS
import api from '../../connect/api.js';

const handleDelete = (id) => {
    api.url(`/tasks/${id}`)
        .delete()
        .json()
        .then(response => {
            console.log('Task deleted successfully', response);
        })
        .catch(error => {
            console.error('Error when deleted', error);
        });
}

function TaskList({ tasks }) {
    return (
        <div className="task-list">
            <h2>Task List</h2>
            <ul>
                {Array.isArray(tasks) && tasks.length > 0 ? (
                    tasks.map((task, index) => (
                        <li key={index} className="task-item">
                            <h3>{task.title}</h3>
                            <p className="task-detail">Description: {task.description}</p>
                            <p className="task-detail">Due Date: {task.dueDate}</p>
                            <p className="task-detail">Category: {task.category}</p>
                            <button className="delete-button" onClick={() => handleDelete(task._id)}>Delete Task</button>
                        </li>
                    ))
                ) : (
                <p>Pas de tâches existantes</p>
                )}
            </ul>
        </div>
    );
}

export default TaskList;
