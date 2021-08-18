import { useEffect, useState, useContext } from "react";
import fetchAPI from "../helpers/fetch";
import tasksContext from "../context/tasks";
import { EditIcon, DeleteIcon } from "../icons";


const Todo = ({ task }) => {
    const { tasks, setTasks, count, setCount } = useContext(tasksContext);
    const fetch = new fetchAPI();


    const handleCompletedTask = (event) => {
        // event.preventDefault();
        let position = tasks.findIndex((t) => task._id === t._id)
        console.log(position)
        fetch.put(`https://api-nodejs-todolist.herokuapp.com/task/${task._id}`, {
            completed: true
        }).then(data => {
            console.log(data.data);
            if(data.success) {
                let position = tasks.findIndex((t) => task._id === t._id);
                task.completed = true;
                console.log(position);
                console.log(tasks);
                let array = tasks;
                array[position] = data.data;
                console.log(array[position]);
                setTasks([...array]);
            }
        })
        // checkbox.current.check()
    }
    useEffect(() => {

    }, [tasks])
    return (
        <div className={`w-full px-6 py-4 bg-white flex justify-between items-center space-x-4 border-b-2 border-gray-300 focus:outline-none focus-within:ring-0 ${task.completed && 'bg-purple-400 bg-opacity-30 transition duration-1000'}`}>
            <div className="flex justify-between items-center gap-3">
                <input className=' transition duration-300 text-purple-700 form-checkbox rounded-full w-4 h-4' type="checkbox" onChange={handleCompletedTask} defaultChecked={task.completed} />
                <p className={`text-gray-700 text-sm font-semibold font-opensans`}>{task.description}</p>
            </div>
            <div className='flex flex-row justify-start items-center gap-2'>
                <button 
                    className=""
                >
                    <EditIcon className="w-5 h-5 text-indigo-500" />
                </button>
                <button 
                    className=""
                >
                    <DeleteIcon className="w-5 h-5 text-pink-600" />
                </button>
                
            </div>
        </div>
    )
}

export default Todo;