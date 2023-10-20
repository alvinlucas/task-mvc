// src/components/TaskList/TaskList.jsx

import React from 'react';
import './styles.css'; // Ajoutez le fichier de style CSS

function TaskList({ tasks }) {
    return (
        <div className="task-list">
            <h2>Task List</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className="task-item">
                        <h3>{task.title}</h3>
                        <p className="task-detail">Description: {task.description}</p>
                        <p className="task-detail">Due Date: {task.dueDate}</p>
                        <p className="task-detail">Category: {task.category}</p>
                        <button className="delete-button">Delete Task</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
