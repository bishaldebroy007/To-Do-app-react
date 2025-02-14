import cross from '../assets/cross.jpg'
import { useState } from 'react';

const ToDoList = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    function handleCheckboxChange(e) {
        e.preventDefault();
        if (task.trim()) {
            setTasks([...tasks, { text: task, completed: false }]);
            setTask('');
        }
    }

    return (
        <header>
            <ToDoItem handleCheckboxChange={handleCheckboxChange} task={task} setTask={setTask} tasks={tasks} setTasks={setTasks} />
        </header>
    )
}

const ToDoItem = ({ handleCheckboxChange, task, setTask, tasks, setTasks }) => {
    return (
        <div className='container'>
            <div className='headerContainer'>
                <h2 className=''>To Do List</h2>
            </div>
            <form onSubmit={handleCheckboxChange}>
                <input className='w-full outline-offset-2' type="text" placeholder='Add a New Task' value={task} onChange={(e) => setTask(e.target.value)} />
            </form>

            <ul>
                <TaskList tasks={tasks} setTasks={setTasks} />
                <FooterPart tasks={tasks} />
            </ul>
            <div>
                <button className="bg-sky-500 hover:bg-sky-700">Save changes</button>
            </div>
        </div>
    )
}

const TaskList = ({ tasks, setTasks }) => {
    const toggleTaskCompletion = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <>
            {tasks.map((task, index) => (
                <li key={index}>
                    <div>
                        <input type="checkbox" checked={task.completed} onChange={() => toggleTaskCompletion(index)} />
                        <p>{task.text}</p>
                    </div>
                    <img src={cross} alt="Remove" onClick={() => removeTask(index)} />
                </li>
            ))}
        </>
    );
};

const FooterPart = ({ tasks }) => {
    const itemsLeft = tasks.filter(task => !task.completed).length;
    const completedTasks = tasks.filter(task => task.completed).length;

    return (
        <li className='footer'>
            <div className='item'>
                <p>{itemsLeft} Items Left</p>
            </div>

            <div className='active'>
                <p>{completedTasks} Completed</p>
            </div>

            <div className='clear'>
                <p>Clear Completed</p>
            </div>
        </li>
    );
};

export default ToDoList;