import React from 'react';
import './InfoBlock.css';

function InfoBlock({ tasks, clearTasks }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div className="info-block">
      <h2>Information</h2>
      <div className="info-content">
        <p>All tasks: {totalTasks}</p>
        <p>Completed: {completedTasks}</p>
        <button onClick={clearTasks}>Delete all tasks</button>
      </div>
      <div className="icon-grid">
        <span className="icon">📝</span>
        <span className="icon">✅</span>
        <span className="icon">🗑️</span>
        <span className="icon">✨</span>
        <span className="icon">✅</span>
        <span className="icon">🗑️</span>
        <span className="icon">✨</span>
      </div>
    </div>
  );
}
export default InfoBlock;