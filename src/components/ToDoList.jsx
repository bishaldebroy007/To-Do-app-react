import cross from '../assets/cross.jpg'

const ToDoList = () => {
    return (
        <header className='flex justify-center'>
            <ToDoItem />
        </header>
    )
}

const ToDoItem = () => {
    return (
        <div className='container w-xl'>
            <div className='headerContainer flex items-center justify-between mb-8'>
                <h2 className=''>To Do List</h2>
            </div>
            <form action="">
                <input className='w-full outline-offset-2' type="text" placeholder='Add a New Task' />
            </form>
            <ul>
                <li>
                    <div>
                        <input type="checkbox" />
                        <p>Task added here</p>
                    </div>
                    <img src={cross} alt="" />
                </li>

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
            </ul>
            <div>
                <button className="bg-sky-500 hover:bg-sky-700">Save changes</button>
            </div>
        </div>
    )
}

export default ToDoList


