// src/App.jsx

import React, {useEffect, useState} from 'react';

import TaskForm from './components/TaskForm/index';
import TaskList from './components/TaskList/index';
import './App.css'; // Assurez-vous que ce fichier est correctement importé.
import api from './connect/api';
function App() {

    const [tasks, setTasks] = useState([]);

    const fetchData = async () => {
      try {
        const response = await api.url('/tasks').get().json();
        setTasks(response);
      } catch (error) {
        console.error('There was an error fetching the data:', error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);

  return (
      <div className="App">
        <h1>Task Manager</h1>
        <div className="mainContainer">
          <div className="formContainer">
            <TaskForm onTaskAdded={fetchData}/>
          </div>
          <div className='listContainer'>
            <TaskList tasks={tasks} onUpdateTask={fetchData}/>
          </div>
        </div>
      </div>
  );
}

export default App;
