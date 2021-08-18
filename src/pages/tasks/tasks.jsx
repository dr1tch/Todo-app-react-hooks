import { useEffect, useState, useContext } from 'react';
import AddTask from '../../components/addTask';
import Modal from '../../components/modal';
import Todo from '../../components/todo';

import fetchAPI from '../../helpers/fetch';
import tasksContext from "../../context/tasks";

const Tasks = () => {
    const [ task, setTask ] = useState('')
    const [isOpen, setIsOpen] = useState(false);
    const { tasks, setTasks, count, setCount } = useContext(tasksContext);
    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    useEffect(() => {

    }, [])

    return (
        <div className="w-full container mx-auto">
        
            <AddTask />
            <div className="w-full px-10 py-3">
            {
                tasks && tasks.map(task => <Todo key={task._id} task={task} />)
            }
            </div>
            
        </div>
    )
}

export default Tasks