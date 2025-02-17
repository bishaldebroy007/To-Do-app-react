import { useState, useEffect } from 'react';
import cross from '../assets/cross.png';

const ToDoList = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    function handleTaskSubmit(e) {
        e.preventDefault();
        if (task.trim()) {
            setTasks([...tasks, { text: task, completed: false, id: Date.now() }]);
            setTask('');
        }
    }

    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const editTask = (id, newText) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, text: newText } : task));
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true;
    });

    return (
        <div className="bg-cover bg-center min-h-screen flex justify-center items-center" style={{ backgroundImage: "url('src/assets/bg-yellow.jpg')" }}>
            <div className='w-[575px]'>
                <div className='flex justify-between items-center mb-10'>
                    <h2 className='text-5xl tracking-wide text-blue'>To Do List</h2>
                </div>
                <form onSubmit={handleTaskSubmit} className='flex gap-2 drop-shadow-lg'>
                    <input className='w-full text-lg font-medium p-4 rounded-lg border-none outline-none text-pretty' type="text" placeholder='Add a New Task' value={task} onChange={(e) => setTask(e.target.value)} />
                    <button type="submit" className='animate-pulse cursor-pointer bg-indigo-400 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg'>Add</button>
                </form>
                <div className='flex justify-around mt-4 drop-shadow-lg'>
                    <button
                        className={`p-1 rounded-md ${filter === 'all' ? 'bg-indigo-400' : 'bg-indigo-500 hover:bg-indigo-800'}`}
                        onClick={() => setFilter('all')}
                    >
                        All
                    </button>
                    <button
                        className={`p-1 rounded-md ${filter === 'active' ? 'bg-indigo-400' : 'bg-indigo-500 hover:bg-indigo-800'}`}
                        onClick={() => setFilter('active')}
                    >
                        Active
                    </button>
                    <button
                        className={`p-1 rounded-md ${filter === 'completed' ? 'bg-indigo-400' : 'bg-indigo-500 hover:bg-indigo-800'}`}
                        onClick={() => setFilter('completed')}
                    >
                        Completed
                    </button>
                </div>
                <ul className='bg-white flex flex-col p-4 rounded-lg mt-10'>
                    {filteredTasks.map((task) => (
                        <li key={task.id} className='flex justify-between items-center py-4 border-b border-gray-300 text-black'>
                            <div className='flex items-center drop-shadow-lg'>
                                <input type="checkbox" className='w-4 h-4 mr-4' checked={task.completed} onChange={() => toggleTaskCompletion(task.id)} />
                                <input
                                    type="text"
                                    className={`border-none bg-transparent focus:outline-none ${task.completed ? 'line-through' : ''}`}
                                    value={task.text}
                                    onChange={(e) => editTask(task.id, e.target.value)}
                                />
                            </div>
                            <img className='w-5 h-5 cursor-pointer' src={cross} alt="Remove" onClick={() => removeTask(task.id)} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ToDoList;
