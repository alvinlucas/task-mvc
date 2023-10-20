import React, { useState } from 'react';
import './styles.css'; 
import api from '../../connect/api.js';
import UpdateModal from '../Modal/UpdateModal';

function TaskList({ tasks, onUpdateTask }) {
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const [search, setSearch] = useState(""); 

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
    
    const handleUpdateModal = (task) => {
        setSelectedTask(task);
        setShowUpdateModal(true);
    };
    
    const handleCloseModal = () => {
        setShowUpdateModal(false);
        setSelectedTask(null);
    };

    const filteredTasks = tasks.filter(task => 
        task.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="task-list">
            <h2>Task List</h2>
            <label htmlFor='search'>Recherche par titre</label>
            <input 
                name="search" 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
            />
            <ul>
                {Array.isArray(filteredTasks) && filteredTasks.length > 0 ? (
                    filteredTasks.map((task, index) => ( 
                        <li key={index} className="task-item">
                            <h3>{task.title}</h3>
                            <p className="task-detail">Description: {task.description}</p>
                            <p className="task-detail">Due Date: {task.dueDate}</p>
                            <p className="task-detail">Category: {task.category}</p>
                            <button className="delete-button" onClick={() => handleDelete(task._id)}>Delete Task</button>
                            <button className="updateBtn" onClick={() => handleUpdateModal(task)}>Update</button>
                            {showUpdateModal && selectedTask && (
                                <UpdateModal task={selectedTask} onClose={handleCloseModal} onUpdateTask={onUpdateTask} />
                            )}
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
