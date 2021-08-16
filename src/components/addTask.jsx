import { useContext, useEffect, useState } from "react";
import fetchAPI from '../helpers/fetch';
import tasksContext from "../context/tasks";
const AddTask = (props) => {
    const fetch = new fetchAPI()
    // const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
    const { tasks, setTasks, count, setCount } = useContext(tasksContext);
    const handleAddTask = (event) => {
        event.preventDefault();
        fetch.post('https://api-nodejs-todolist.herokuapp.com/task', {
            description: task
        }).then(data => {
            console.log(data);
            if(data.success){
                setTask('')
                setTasks([...tasks, data.data]);
                setCount(count + 1);
            }
        });
    }
    useEffect(() => {
        // fetch.get("https://api-nodejs-todolist.herokuapp.com/task")
        // .then(data => {
        //     console.log(data);
        // })
    }, [])
    return (
        <form className='' onSubmit={handleAddTask}>
            <div className='flex justify-start items-center space-x-3 gap-1 mt-6'>
                <input 
                    aria-label='Enter your task'
                    className='px-3 py-2 border border-gray-500 rounded text-sm w-72'
                    type="text" 
                    placeholder='New task...' 
                    onChange={({target}) => setTask(target.value)}
                    value={task || ''}
                />
                <button 
                    type='submit'
                    className='bg-indigo-200 hover:bg-indigo-300 text-indigo-700 rounded px-3 py-2 text-sm w-24'
                >Add</button>
            </div>
        </form>
    )
}

export default AddTask;