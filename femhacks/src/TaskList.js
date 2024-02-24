import React, { useState } from 'react';
import './styles/TaskList.css';

const TaskList = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Complete React project', completed: false },
        { id: 2, text: 'Study for exams', completed: false },
        { id: 3, text: 'Grocery shopping', completed: false },
    ]);

    const toggleTask = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <div className="task-list">
            <h1>Task List</h1>
            <ul>
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className={task.completed ? 'completed' : ''}
                        onClick={() => toggleTask(task.id)}
                    >
                        {task.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
