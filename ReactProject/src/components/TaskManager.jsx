import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const editTask = (editedTask) => {
    setTasks(tasks.map(task => (task.id === editedTask.id ? editedTask : task)));
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Task Manager</h1>
      <TaskForm onAddTask={addTask} tasks={tasks} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} onEditTask={editTask} />
    </div>
  );
};

export default TaskManager;