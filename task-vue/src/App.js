// src/App.jsx

import React, {useEffect, useState} from 'react';

import TaskForm from './components/TaskForm/index';
import TaskList from './components/TaskList/index';
import './App.css'; // Assurez-vous que ce fichier est correctement importé.
import api from './connect/api';
function App() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await api.url('/tasks')
                  .get()
                  .json();
  
              setTasks(response);
          } catch (error) {
              console.error('There was an error fetching the data:', error);
          }
      };
  
      fetchData();
  }, []);

  return (
      <div className="App">
        <h1>Task Manager</h1>
        <TaskForm />
        <TaskList tasks={tasks} />
      </div>
  );
}

export default App;
