import React, { useState, useRef, useEffect } from 'react';
import './styles/TaskList.css';

const useOutsideAlerter = (ref, close) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                close();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, close]);
};

const TaskList = () => {
    const [sections, setSections] = useState([
        { name: 'School', tasks: [{ title: 'CIS 320 HW', description: 'rip', dueDate: '2024-02-25T23:59', completed: false }] },
        { name: 'Clubs', tasks: [] }
    ]);
    const [newSectionName, setNewSectionName] = useState('');
    const [showAddTask, setShowAddTask] = useState(null);
    const [taskInputs, setTaskInputs] = useState({});
    const taskInputRef = useRef(null);

    useOutsideAlerter(taskInputRef, () => setShowAddTask(null));

    const addSection = () => {
        if (newSectionName.trim() !== '') {
            setSections([...sections, { name: newSectionName, tasks: [] }]);
            setNewSectionName('');
        }
    };

    const toggleAddTask = (sectionName) => {
        setShowAddTask(showAddTask === sectionName ? null : sectionName);
    };

    const updateTaskInput = (sectionName, key, value) => {
        setTaskInputs({
            ...taskInputs,
            [sectionName]: {
                ...taskInputs[sectionName],
                [key]: value
            }
        });
    };

    const addTask = (sectionName) => {
        const newTask = taskInputs[sectionName];
        if (newTask && newTask.title.trim() !== '') {
            const updatedSections = sections.map(section => {
                if (section.name === sectionName) {
                    return {
                        ...section,
                        tasks: [...section.tasks, { ...newTask, completed: false }]
                    };
                }
                return section;
            });
            setSections(updatedSections);
            setTaskInputs({
                ...taskInputs,
                [sectionName]: { title: '', description: '', dueDate: '' }
            });
            setShowAddTask(null);
        }
    };
    const renderTaskInput = (sectionName) => {
        return (
            <div className="task-input" ref={taskInputRef}>
                <input
                    type="text"
                    placeholder="Task name"
                    value={taskInputs[sectionName]?.title || ''}
                    onChange={(e) => updateTaskInput(sectionName, 'title', e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={taskInputs[sectionName]?.description || ''}
                    onChange={(e) => updateTaskInput(sectionName, 'description', e.target.value)}
                />
                <input
                    type="datetime-local"
                    value={taskInputs[sectionName]?.dueDate || ''}
                    onChange={(e) => updateTaskInput(sectionName, 'dueDate', e.target.value)}
                />
                <button onClick={() => addTask(sectionName)}>Add Task</button>
            </div>
        );
    };

    const handleCheckTask = (sectionName, taskIndex) => {
        // Function to toggle the task's completed status
        const newSections = sections.map((section) => {
            if (section.name === sectionName) {
                return {
                    ...section,
                    tasks: section.tasks.map((task, index) => {
                        if (index === taskIndex) {
                            return { ...task, completed: !task.completed }; // Toggle completed status
                        }
                        return task;
                    }),
                };
            }
            return section;
        });
        setSections(newSections);
    };

    const Checkbox = ({ isChecked, onToggle }) => {
        return (
            <div className={`check-circle ${isChecked ? 'checked' : ''}`} onClick={onToggle}>
                {isChecked && <span className="checkmark">✓</span>}
            </div>
        );
    };
    const formatDueDate = (dueDate) => {
        const date = new Date(dueDate);
        const hours = date.getHours() % 12 || 12; // Convert 24h to 12h format
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
        return `${date.getMonth() + 1}/${date.getDate()}, ${hours}:${minutes} ${ampm}`;
    };

    const sectionColors = [
        'section-deep-blue',
        'section-goldfish-orange',
        'section-sky-blue',
        'section-coral-pink',
        'section-aquamarine'
    ];


    return (
        <div className="task-list">
            <div className="sections-container">
                {sections.map((section, index) => {
                    // Get a color class based on the section index
                    const colorClass = `section-${sectionColors[index % sectionColors.length]}`;

                    return (
                        <div key={index} className={`section ${colorClass}`}>
                            <h2 className="category-title">{section.name}</h2>
                            <div className="tasks-container">
                                {section.tasks.map((task, taskIndex) => (
                                    <div key={taskIndex} className={`task ${task.completed ? 'completed' : ''}`}>
                                        <Checkbox
                                            isChecked={task.completed}
                                            onToggle={() => handleCheckTask(section.name, taskIndex)}
                                        />
                                        <div className="task-details">
                                            <div className="task-title">{task.title}</div>
                                            <div className="task-description">{task.description}</div>
                                            <div className="task-time">{formatDueDate(task.dueDate)}</div>
                                        </div>
                                    </div>
                                ))}
                                {showAddTask === section.name && renderTaskInput(section.name)}
                            </div>
                            {showAddTask !== section.name && (
                                <button className={`add-task-btn ${colorClass}`} onClick={() => toggleAddTask(section.name)}>+ Add task</button>
                            )}
                        </div>
                    );
                })}
                <div className="add-section-container">
                    <div className="add-section">
                        <input
                            type="text"
                            value={newSectionName}
                            onChange={(e) => setNewSectionName(e.target.value)}
                            placeholder="New section name"
                            onKeyPress={(e) => e.key === 'Enter' && addSection()}
                        />
                        <button onClick={addSection}>+ Add section</button>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default TaskList;