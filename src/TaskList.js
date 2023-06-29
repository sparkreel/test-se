import React from 'react';

const TaskList = ({ tasks = [], onDelete = () => { } }) => {
    return (
        <div>
            <h2>Tasks</h2>
            {tasks?.length ? (
                <ul>
                    {tasks?.map(task => (
                        <li key={task.id}>
                            {task.title}{' '}
                            <button onClick={() => onDelete(task.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Not tasks</p>
            )}
        </div>
    );
};

export default TaskList;
