import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDeleteTask, onEditTask }) => {
  return (
    <div className="flex flex-wrap">
      {tasks.map((task) => (
        <div key={task.id} className="w-full md:w-1/2 lg:w-1/3 p-2">
          <Task className="whitespace-normal" task={task} onDeleteTask={onDeleteTask} onEditTask={onEditTask} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;