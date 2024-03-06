import React, { useEffect, useMemo } from 'react';
import TaskList from './TaskList';
import CreateTask from './CreateTask';

let taskId = 0;

const App = () => {
    const [tasks, setTasks] = React.useState([]);

    const tasksData = useMemo(() => tasks, []);

    useEffect(() => {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      setTasks(storedTasks);
    }, []);

    const createTask = task => {
        taskId += 1;
        setTasks(prevTasks => [...prevTasks, { id: taskId, ...task }]);
    };

    const deleteTask = taskId => {
     setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    };

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    return (
        <div className="App">
            <CreateTask onCreate={createTask} />
            <TaskList tasks={tasksData} onDelete={deleteTask} />
        </div>
    );
};

export default App;
