import React, { useState, useEffect } from 'react';
import './App.css';
import InfoBlock from './InfoBlock'; 

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [input, setInput] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput('');
  };

  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const clearTasks = () => {
    setTasks([]);
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="app-container"> 
      <div className="app">
        <h1>To Do list</h1>
        <form onSubmit={addTask}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a task..."
          />
          <button type="submit">Add </button>
        </form>
        <ul>
        {tasks.map((task, index) => (
            <li key={index}>
              <span
                className={task.completed ? 'completed' : ''}
                onClick={() => toggleTask(index)}
              >
                {task.text}
              </span>
              <button
                className="delete-btn"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <InfoBlock tasks={tasks} clearTasks={clearTasks} /> 
    </div>
  );
}

export default App