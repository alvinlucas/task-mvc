import React, { useState } from 'react';
import api from '../../connect/api';

const UpdateModal = ({ task, onClose, onUpdateTask }) => {
    const [updatedTask, setUpdatedTask] = useState(task);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedTask({
            ...updatedTask,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.url(`/tasks/${task._id}`).put(updatedTask).json();
            console.log('Task updated successfully');
            onClose(); 
            onUpdateTask();
        } catch (error) {
            console.error('There was an error updating the task:', error);
        }
    };


    return (
        <div className="update-task-modal">
        <h2>Update Task</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={updatedTask.title}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
            <textarea
                name="description"
                placeholder="Description"
                value={updatedTask.description}
                onChange={handleInputChange}
            />
            </div>
            <div className="form-group">
                <input
                    type="date"
                    name="dueDate"
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={updatedTask.category}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Confirm</button>
            <button type="button" onClick={onClose}>Cancel</button>
        </form>
        </div>
    );
};

export default UpdateModal;
