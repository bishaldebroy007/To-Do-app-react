import cross from '../assets/cross.jpg'
import { useState } from 'react';

const ToDoList = () => {

    const [task, setTask] = useState('');

    function handleCheckboxChange(e) {
        e.preventDefault();
        console.log(task);
        setTask('');
    }

    return (
        <header>
            <ToDoItem handleCheckboxChange={handleCheckboxChange} task={task} setTask={setTask} />
        </header>
    )
}

const ToDoItem = ({ handleCheckboxChange, task, setTask }) => {

    return (
        <div className='container'>
            <div className='headerContainer'>
                <h2 className=''>To Do List</h2>
            </div>
            <form onSubmit={handleCheckboxChange}>
                <input className='w-full outline-offset-2' type="text" placeholder='Add a New Task' value={task} onChange={(e) => setTask(e.target.value)} />
            </form>

            <ul>
                <TaskList />
                <FooterPart />
            </ul>
            <div>
                <button className="bg-sky-500 hover:bg-sky-700">Save changes</button>
            </div>
        </div>
    )
}

const TaskList = () => {
    return (
        <li>
            <div>
                <input type="checkbox" />
                <p>Task added here</p>
            </div>
            <img src={cross} alt="" />
        </li>
    );
};

const FooterPart = () => {
    return (
        <li className='footer'>
            <div className='item'>
                <p>2 Items Left</p>
            </div>

            <div className='active'>
                <p>0 Completed</p>
            </div>

            <div className='clear'>
                <p>Clear Completed</p>
            </div>
        </li>
    );
};
export default ToDoList


