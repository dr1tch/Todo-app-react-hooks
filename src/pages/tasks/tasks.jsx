import { useEffect, useState } from 'react';
import AddTask from '../../components/addTask';
import Modal from '../../components/modal';

const Tasks = () => {
    const [ task, setTask ] = useState('')
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    useEffect(() => {

    }, [])

    return (
        <>
            <AddTask />
            
            {/* <button 
                className='bg-indigo-200 hover:bg-indigo-300 text-indigo-700 rounded px-3 py-2 text-sm w-24'
                onClick={openModal}
            >Add Task</button>
            <Modal isOpen={isOpen} closeModal={closeModal}>
                    <h1>Title</h1>
                    <hr />
                    <p>this is the body!</p>
                    <hr />
            </Modal> */}
        </>
    )
}

export default Tasks